/// <reference types="vite/client" />

import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const targetProxy = env.VITE_BACKEND_API_HOST

  const proxyConfig = {
    target: targetProxy,
    changeOrigin: false,
    secure: false,
    ws: true,
  }

  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgr({
        include: '**/*.svg?react',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        common: resolve(__dirname, 'src/common'),
        modules: resolve(__dirname, 'src/modules'),
        api: resolve(__dirname, 'src/api'),
      },
    },
    define: {
      'process.env': JSON.stringify({ ...env }),
      // for production use & it only works that way!!!
      'process.env.VITE_BACKEND_API_HOST': JSON.stringify(env.VITE_BACKEND_API_HOST),
      'process.env.VITE_MUIX_KEY': JSON.stringify(env.VITE_MUIX_KEY),
    },
    server: {
      port: 3000,
      cors: false,
      proxy: {
        '/v2/auth': proxyConfig,
        '/v2/globalconfiguration/userconfiguration': proxyConfig,
      },
    },
  }
})
