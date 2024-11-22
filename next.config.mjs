import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = 'source-map'; // Abilita la generazione della source map
    }
    return config;
  },
};

export default withNextIntl(withMDX(nextConfig));
