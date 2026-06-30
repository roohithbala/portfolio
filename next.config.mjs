const isGithubActions=process.env.NEXT_EXPORT==='true';

/** @type {import('next').NextConfig} */
const nextConfig={
  reactStrictMode:true,
  images:{
    unoptimized:true
  },
  output:isGithubActions?'export':undefined,
  basePath:isGithubActions?'/portfolio':undefined
};

export default nextConfig;
