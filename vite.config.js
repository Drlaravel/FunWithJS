import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting';
import inject from "@rollup/plugin-inject";
import { config as dotenvConfig } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenvConfig();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
   build: {
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
         input: {
            index: path.resolve(__dirname, 'src/templates/index.html'), // default
         },
      },
   },
   resolve: {
      input: {
         index: path.resolve(__dirname, 'src/templates/index.html'), // default
      },
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
   plugins: [
      postcssNesting,
      inject({
         $: 'jquery', // this caused warnings for all my scss files that had $variable
         jQuery: 'jquery',
      }),
   ],
   server: {
      port: PORT,
      open:true
   }
})