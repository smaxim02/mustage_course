/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ['admin.mustage.team', 'localhost', '127.0.0.1'],
  },
};

export default withNextIntl(nextConfig);
