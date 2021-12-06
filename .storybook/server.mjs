import { storybookPlugin } from '@web/dev-server-storybook';
import baseConfig from '../web-dev-server.config.mjs';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  ...baseConfig,
  open: '/',
  port: 6600,
  plugins: [storybookPlugin({ type: 'web-components', configDir: './.storybook' })],
});
