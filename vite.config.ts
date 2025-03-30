import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
    resolve: {
        alias: {
            src: '/src',
            data: '/src/data',
            store: '/src/store',
            types: '/src/types',
            hooks: '/src/hooks',
            pages: '/src/pages',
            slices: '/src/slices',
            assets: '/src/assets',
            routes: '/src/routes',
            constants: '/src/constants',
            components: '/src/components',
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
    },
});
