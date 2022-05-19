import { defineConfig } from 'vite'
import path from 'path'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import mkcert from 'vite-plugin-mkcert'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue2(),

    // https://github.com/liuweiGL/vite-plugin-mkcert
    mkcert(),

    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'Music',
    //     short_name: 'Music',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/android-chrome-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //     ],
    //   },
    // }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
      defaultClass: 'svg-icon',
      compiler: 'vue2',
      customCollections: {
        my: {
          'repeat1':
            '<svg t="1643369879726" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2254" width="1em" height="1em"><path d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z" p-id="2255"></path><path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z" p-id="2256"></path></svg>',
          'repeat':
            '<svg t="1643369911379" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2523" width="1em" height="1em"><path d="M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z" p-id="2524"></path></svg>',
          'mute':
            '<svg width="1em" height="1em" viewBox="0 0 20 20"><g fill="none"><path d="M12 3.006c0-.873-1.04-1.327-1.68-.733L6.448 5.866a.5.5 0 0 1-.34.134H3.5A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h2.607a.5.5 0 0 1 .34.133l3.873 3.594c.64.593 1.68.14 1.68-.733V3.006z" fill="currentColor"></path><path d="M14.079 12.933a.5.5 0 0 1-.184-.683a4.498 4.498 0 0 0 0-4.5a.5.5 0 1 1 .865-.5a5.498 5.498 0 0 1 .001 5.5a.5.5 0 0 1-.682.183z" fill="currentColor"></path></g></svg>',
          'netease-cloud':
            '<svg t="1643478168006" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2318" width="1em" height="1em"><path d="M512 32c265.12 0 480 214.88 480 480 0 265.088-214.88 480-480 480-265.088 0-480-214.912-480-480C32 246.848 246.912 32 512 32z m82.08 173.568c-51.84 17.152-76.736 65.44-61.856 120.32l5.344 20.192c-11.2 2.432-22.208 5.696-32.928 9.824-50.656 19.52-90.848 62.816-104.896 113.024a153.696 153.696 0 0 0-5.088 55.04 137.92 137.92 0 0 0 57.536 100.576 121.504 121.504 0 0 0 103.264 17.6 120.96 120.96 0 0 0 63.68-42.56c24.736-32.288 32.096-74.752 20.8-119.52-4.16-16.32-9.344-34.368-14.4-51.904l-5.376-18.976c21.44 5.376 41.184 16.032 57.44 31.04 56 52.288 66.784 142.368 25.088 209.536-36.608 59.008-107.936 97.088-181.664 97.088a225.76 225.76 0 0 1-225.536-225.472c0-28.992 5.696-57.696 16.832-84.448a221.664 221.664 0 0 1 41.856-65.6 223.712 223.712 0 0 1 81.408-56.416A31.712 31.712 0 0 0 412.064 256a299.52 299.52 0 0 0-25.696 11.808 289.504 289.504 0 0 0-100 86.432 286.56 286.56 0 0 0-54.304 167.136c0 159.296 129.6 288.896 288.96 288.896 95.2 0 187.648-49.856 235.552-127.072 58.304-93.888 43.232-215.584-35.712-289.344-32.32-30.208-74.368-47.872-118.784-51.776-2.304-8.96-5.888-22.592-8.64-32.832-2.08-7.584-3.104-16.16-0.864-23.808a31.808 31.808 0 0 1 38.4-21.44c4.416 1.184 8.608 3.264 12.256 6.048 3.84 2.88 6.848 6.624 10.368 9.888a31.744 31.744 0 0 0 49.856-37.664l-0.64-1.056a65.312 65.312 0 0 0-14.4-16.448 100.48 100.48 0 0 0-53.376-23.392 96.128 96.128 0 0 0-40.96 4.224z m-40.224 201.92c3.36 12.416 7.04 25.344 10.752 38.176 4.928 17.28 9.888 34.432 13.824 49.92 4.576 18.176 6.624 44.192-9.664 65.472a57.056 57.056 0 0 1-30.24 19.936 58.464 58.464 0 0 1-50.144-8.544 73.92 73.92 0 0 1-30.528-53.952 89.6 89.6 0 0 1 2.944-32.416c8.8-31.36 34.304-58.528 66.624-71.008 8.672-3.36 17.536-5.856 26.432-7.584z" fill="#DD001B" p-id="2319"></path></svg>',
        },
      },
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: 'src/components.d.ts',
      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: 'i',
          customCollections: ['my'],
          // enabledCollections: ['carbon']
        }),
      ],
    }),
    ScriptSetup(),
  ],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  server: {
    https: true,
    open: true,
    port: 3001,
    fs: {
      strict: true,
    },
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  },
})
