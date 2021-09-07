import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';

// eslint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  base: '/aviasales/',
  plugins: [
    reactRefresh(),
    reactSvgPlugin({
      defaultExport: 'component',
      memo: true,
    }),
  ],
});
