import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), federation({
        name: 'app',
        remotes: {
            auth: 'http://localhost:5001/assets/remoteEntry.js',
            profile: 'http://localhost:5002/assets/remoteEntry.js',
            content: 'http://localhost:5003/assets/remoteEntry.js',
            social: 'http://localhost:5004/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom', 'react-router-dom']
    })], build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})
