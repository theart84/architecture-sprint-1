import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "profile",
            filename: "remoteEntry.js",
            exposes: {
                './Profile': './src/components/Profile',
                './PopupWithForm': './src/components/PopupWithForm',
                './EditProfilePopup': './src/components/EditProfilePopup',
                './EditAvatarPopup': './src/components/EditAvatarPopup',
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
