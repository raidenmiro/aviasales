import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';
import checker from 'vite-plugin-checker';

// eslint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvgPlugin({
      defaultExport: 'component',
      memo: true,
    }),
    checker({ typescript: true }),
  ],
});
