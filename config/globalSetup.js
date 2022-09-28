// eslint-disable-next-line import/no-extraneous-dependencies
const { setup: setupDevServer } = require('jest-dev-server');

module.exports = async function globalSetup() {
  await setupDevServer({
    command: 'vite --host',
    launchTimeout: 30000,
    port: 3000,
  });
};
