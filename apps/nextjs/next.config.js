/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTranspileModules = require('next-transpile-modules')([
  'storybook',
])

module.exports = withTranspileModules(nextConfig)
