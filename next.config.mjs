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
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      // Abilita la generazione delle source map solo in produzione lato client
      config.devtool = 'source-map';
    }
    return config;
  },
};

export default withNextIntl(withMDX(nextConfig));
