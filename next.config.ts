import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // سایر تنظیمات مربوط به Next.js
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable : process.env.NODE_ENV === 'development'
})(nextConfig);
