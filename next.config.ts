import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**/image/upload/**')],
  },
}

const withNextIntl: (nextConfig?: NextConfig) => NextConfig =
  createNextIntlPlugin()

export default withNextIntl(nextConfig)
