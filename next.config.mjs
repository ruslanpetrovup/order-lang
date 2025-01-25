import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
    ],
  },
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use))

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader?.includes('css-loader') &&
          !moduleLoader.loader?.includes('postcss-loader')
        ) {
          if (moduleLoader.options?.modules) {
            moduleLoader.options.modules = {
              ...moduleLoader.options.modules,
              auto: true,
            }
          }
        }
      })
    })

    return config
  },
  transpilePackages: ['@payloadcms/next', '@payloadcms/richtext-lexical'],
}

export default withPayload(nextConfig)
