exports.config = {
  framework: 'mocha',
  directConnect: true,
  specs: ['src/client/test/e2e/spec.js'],
  baseUrl: 'http://localhost:7200',
  chromeOnly: false,
  capabilities: {
  'browserName': 'firefox'
  }
}

// The file path to the selenium server jar () on local machine
// seleniumServerJar: '/Users/jburliso/node/ea/poc/jenkins-poc/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
// The file path to the selenium server jar () on Jenkins
// seleniumServerJar:  '/opt/jenkins/lib/jobs/Protractor Test/workspace/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
//
// seleniumAddress: 'http://localhost:4444/wd/hub',
