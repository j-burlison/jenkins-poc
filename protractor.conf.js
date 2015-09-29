exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:7203',
  specs: ['src/test/spec.js'],
  capabilities: {
  'browserName': 'chrome'
  }
}
