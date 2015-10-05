exports.config = {
  framework: 'mocha',
  // The file path to the selenium server jar ()
  // seleniumServerJar: '/usr/local/Cellar/nvm/0.26.1/versions/node/v0.12.7/lib/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  seleniumServerJar:  '/home/jenkins/.nvm/versions/node/v0.12.7/lib/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  specs: ['src/client/test/e2e/spec.js'],
  chromeOnly: true,
  capabilities: {
  'browserName': 'chrome'
  }
}
