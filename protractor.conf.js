exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/client/test/e2e/spec.js'],
  baseUrl: 'http://localhost:7200',
  chromeOnly: false,
  capabilities: {
  'browserName': 'firefox'
  }
}

// The file path to the selenium server jar () on local machine
// seleniumServerJar: '/usr/local/opt/nvm/versions/node/v0.12.7/lib/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
// The file path to the selenium server jar () on Jenkins
// seleniumServerJar:  '/home/jenkins/.nvm/versions/node/v0.12.7/lib/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
