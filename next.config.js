/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  serverRuntimeConfig: {
    API_DOMAIN_INTERNAL: process.env.NEXT_PUBLIC_BACKEND_URL_INTERNAL
  },
  publicRuntimeConfig: {
    API_DOMAIN_EXTERNAL: process.env.NEXT_PUBLIC_BACKEND_URL_EXTERNAL,
    QTILE_URL: process.env.NEXT_PUBLIC_QTILE_URL,
    basePath: process.env.BASE_PATH,
    project_name: process.env.PROJECT_NAME,
    firm_name: process.env.FIRM_NAME,
    version: process.env.VERSION,
    layerListPerPage: process.env.LAYER_LIST_PER_PAGE,
    backupListPerPage: process.env.BACKUP_LIST_PER_PAGE,
  },
  basePath: process.env.BASE_PATH,
  // distDir: "/_next"
}

module.exports = nextConfig
