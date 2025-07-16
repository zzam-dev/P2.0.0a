/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  basePath: '/P2.0.0a', // the repo name (case-sensitive!)
  assetPrefix: '/P2.0.0a', // ensures styles & scripts load properly
};

module.exports = nextConfig;

