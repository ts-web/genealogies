'use client';
import { scaleLinear } from 'd3-scale';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Axis } from 'react-d3-axis-ts';
import { normalizeWheelDelta, usePanZoom } from 'use-d3-pan-zoom';
import useResizeObserver from 'use-resize-observer';
import { useRev } from 'use-rev';

import styles from './styles.module.scss';


// just chart stuff...
const marginTop = 20;
const marginRight = 10;
const marginBottom = 30;
const marginLeft = 10;

export default function MainView () {
  const [chartElement, setChartElement] = useState<Element | null>();
  const {ref, width: chartWidth = 100, height: chartHeight = 100} = useResizeObserver<HTMLDivElement>();

  // When the chartElement is resolved, prevent the default action of certain events:
  //   - touchstart — or else touch events on the chart will sometimes get intercepted by the browser for scrolling, page navigation ("swipe"), or full-page pixelated zooming.
  //   - wheel — so that zooming the chart doesn't cause page scrolling.
  //
  // Note: this can't be done inline because JSX syntax doesn't support passing `{passive: false}` when registering event listener callbacks.
  // See https://github.com/facebook/react/issues/6436
  useEffect(() => {
    if (!chartElement) return;
    const preventDefault = (e: Event) => {e.preventDefault();};
    chartElement.addEventListener('touchstart', preventDefault, {passive: false});
    chartElement.addEventListener('wheel', preventDefault, {passive: false});
    return () => {
      chartElement.removeEventListener('touchstart', preventDefault);
      chartElement.removeEventListener('wheel', preventDefault);
    }
  }, [chartElement]);

  // Track the chart's offset, to be used when we calculate a pointer's position relative to the chart.
  const chartOffset = useRef({x: 0, y: 0});
  const updateChartOffset = () => {
    if (!chartElement) return;
    const rect = chartElement.getBoundingClientRect();
    chartOffset.current = {
      x: rect.x,
      y: rect.y,
    };
  };

  const [scaleRev, bumpRev] = useRev();
  const [rendered, setRendered] = useState(false);

  const xScale = useMemo(() => {
    const _xScale = scaleLinear();
    _xScale.domain([-2, 8]);
    _xScale.range([marginLeft, 100 - marginRight]);
    return _xScale;
  }, []);
  const yScale = useMemo(() => {
    const _yScale = scaleLinear();
    _yScale.domain([0, 1]).nice();
    _yScale.range([100 - marginBottom, marginTop]);
    return _yScale;
  }, []);

  useEffect(() => {
    xScale.range([marginLeft, chartWidth - marginRight]);
    bumpRev();
    setRendered(true);
  }, [chartWidth, xScale, bumpRev]);
  useEffect(() => {
    yScale.range([chartHeight - marginBottom, marginTop]);
    bumpRev();
    setRendered(true);
  }, [chartHeight, yScale, bumpRev]);

  const {
    onPointerDown,
    onPointerUp,
    onWheelZoom,
  } = usePanZoom({
    xScale,
    yScale,
    lockYAxis: true,
    onUpdate: () => {
      bumpRev();
    },
    registerMoveListener: (onPointerMove) => {
      // Only listen to move events while an interaction is happening.
      // Listen on `document` so that a panning gesture can continue beyond the edge of the chart.
      const handlePointermove = (e: PointerEvent) => {
        onPointerMove(e.pointerId, {
          x: e.clientX - chartOffset.current.x,
          y: e.clientY - chartOffset.current.y,
        });
      };
      document.addEventListener('pointermove', handlePointermove, {passive: false});
      return () => {
        document.removeEventListener('pointermove', handlePointermove);
      };
    },
  });

  // Create a clip-path with a unique ID.
  const clipId = useId();

  return (
    <div ref={ref} className={styles.container}>
      <svg
        ref={setChartElement}
        width={chartWidth}
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        style={{
          overflow: 'hidden',
          userSelect: 'none',
          visibility: rendered ? 'visible' : 'hidden',
        }}
        onPointerDown={(e) => {
          // Only listen to primary button events (no right-clicks, etc).
          if (e.button !== 0) return;
          // Take note of the chart's on-screen position when the gesture starts.
          updateChartOffset();
          // Capturing the pointer lets panning gestures avoid being interrupted when they stray outside the window bounds.
          e.currentTarget.setPointerCapture(e.pointerId);
          // Report a pointer down, passing coordinates relative to the chart.
          onPointerDown(e.pointerId, {
            x: e.clientX - chartOffset.current.x,
            y: e.clientY - chartOffset.current.y,
          });
        }}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          onPointerUp(e.pointerId);
        }}
        onPointerLeave={(e) => {
          onPointerUp(e.pointerId);
        }}
        onPointerCancel={(e) => {
          onPointerUp(e.pointerId);
        }}
        onWheel={(e) => {
          // Take note of the chart's on-screen position.
          updateChartOffset();
          // Report a wheel zoom event, passing coordinates relative to the chart.
          onWheelZoom({
            center: {
              x: e.clientX - chartOffset.current.x,
              y: e.clientY - chartOffset.current.y,
            },
            zoomRatio: Math.pow(2, normalizeWheelDelta({
              delta: e.deltaY,
              deltaMode: e.deltaMode,
              multiplier: e.ctrlKey ? 10 : 1,
            })),
          });
        }}
      >
        <clipPath id={clipId}>
          <rect
            x={marginLeft}
            y={marginTop}
            width={chartWidth - marginLeft - marginRight}
            height={chartHeight - marginTop - marginBottom}
          />
        </clipPath>
        <g>
          <g transform={`translate(0, ${chartHeight - marginBottom})`}>
            <Axis
              orient='bottom'
              scale={xScale}
              tickSizeOuter={0}
              scaleRev={scaleRev}
            />
          </g>
        </g>
        <g clipPath={`url(#${clipId})`}>
          {/* ... chart data ... */}
        </g>
      </svg>
    </div>
  );
}
