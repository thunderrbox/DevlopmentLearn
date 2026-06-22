import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000',// append '/api' to the backend server URL, so that any request starting with '/api' will be forwarded to 'http://localhost:5000/api'.
      // Proxy API requests to the backend server running on port 5000
      // we use this proxy configuration to avoid CORS issues when the frontend and backend are running on different ports during development.
      // and we don't want to hardcode the backend server URL in our frontend code, so we use this proxy configuration to forward API requests to the backend server.
    },
  },
  plugins: [preact()],
});
