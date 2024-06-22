import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run nx-react-vite:serve',
        production: 'nx run nx-react-vite:preview',
      },
      ciWebServerCommand: 'nx run nx-react-vite:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
