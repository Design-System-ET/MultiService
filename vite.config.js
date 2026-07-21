import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    base: '/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          contacto: resolve(__dirname, "pages/contacto.html")
        }
      }
    },
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "favicon.svg",
          "favicon-96x96.png",
          "apple-touch-icon.png"
        ],
        manifest: {
          name: "MultiService",
          short_name: "MS",
          description:
            "Soluciones integrales en electricidad, electrónica, carpintería, mecánica, herrería, informática y más.",
          background_color: "#1a3c5e",
          theme_color: "#1a3c5e",
          display: "standalone",
          start_url: "/",
          icons: [
            {
              src: "/web-app-manifest-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/web-app-manifest-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            }
          ]
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,json,ico,png,jpg,jpeg,gif,svg,webp}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
              }
            }
          ]
        }
      })
    ],
    transformIndexHtml: {
      enforce: "post",
      transform(html) {
        return html
          .replace(/%VITE_SITE_URL%/g, env.VITE_SITE_URL)
          .replace('<link rel="stylesheet" crossorigin', '<link rel="stylesheet"');
      }
    }
  };
});