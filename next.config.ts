import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        pathname: '**',
      },
    ],
  },
}

const withNextIntl: (nextConfig?: NextConfig) => NextConfig =
  createNextIntlPlugin()

export default withNextIntl(nextConfig)
