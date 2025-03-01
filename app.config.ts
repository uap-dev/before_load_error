import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

import fs from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const sslKey = fs.readFileSync(
  join(homedir(), '.config/dev-certs/localhost+2-key.pem'),
  'utf-8',
);
const sslCert = fs.readFileSync(
  join(homedir(), '.config/dev-certs/localhost+2.pem'),
  'utf-8',
);


export default defineConfig({
  server: {
    https: {
      key: sslKey,
      cert: sslCert,
    },
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
