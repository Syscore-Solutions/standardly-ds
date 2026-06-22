import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: '1wDesignSystem',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: [
            {
              format: 'es',
              entryFileNames: 'index.mjs',
              assetFileNames: 'style.css',
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
              },
            },
            {
              format: 'cjs',
              entryFileNames: 'index.cjs',
              assetFileNames: 'style.css',
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
              },
            },
          ],
        },
        cssCodeSplit: false,
      },
    };
  }

  return {
    plugins: [react()],
  };
});
