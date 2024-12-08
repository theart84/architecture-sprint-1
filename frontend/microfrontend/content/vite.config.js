import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "content",
            filename: "remoteEntry.js",
            exposes: {
                './Content': './src/components/Content',
                './AddPlacePopup': './src/components/AddPlacePopup',
            },
            shared: ['react', 'react-dom', 'react-router-dom']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})
