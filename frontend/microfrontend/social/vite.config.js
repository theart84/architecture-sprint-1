import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "like",
            filename: "remoteEntry.js",
            exposes: {
                './Like': './src/components/Like'
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
