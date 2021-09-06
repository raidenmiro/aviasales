import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// eslint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  base: '/aviasales/',
  plugins: [reactRefresh()],
});
