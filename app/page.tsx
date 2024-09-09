import MainView from './MainView';



export default function Home () {
  return (
    <MainView
      points={[
        {
          id: 'a',
          label: 'Point A',
          year: 0,
        },
        {
          id: 'b',
          label: 'Point B',
          year: 32,
        },
      ]}
    />
  );
}
