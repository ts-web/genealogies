/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static exports for the App router.
    // See https://nextjs.org/docs/app/building-your-application/deploying/static-exports
    output: 'export',
    // The base path is the GitHub repository slug.
    // See https://nextjs.org/docs/app/api-reference/next-config-js/basePath
    basePath: '/genealogies',
    // Disable server-based image optimization. Next.js does not support dynamic features with static exports.
    // See https://nextjs.org/docs/app/api-reference/components/image#unoptimized
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
