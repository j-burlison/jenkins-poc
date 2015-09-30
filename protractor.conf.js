exports.config = {
  framework: 'mocha',
  // The file path to the selenium server jar ()
  // seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/test/spec.js'],
  capabilities: {
  'browserName': 'chrome'
  }
}
