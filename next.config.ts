import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
}

const withNextIntl: (nextConfig?: NextConfig) => NextConfig =
  createNextIntlPlugin()

export default withNextIntl(nextConfig)
