import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
      unoptimized: true,
  },
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/infografia-nlp' : '',


};

export default nextConfig;
