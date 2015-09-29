// spec.js
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai's expect().to.exist style makes default jshint unhappy.
// jshint expr:true

describe('no protractor at all', function() {
  it('should still do normal tests', function() {
    expect(true).to.equal(true);
  });
});

describe('protractor library', function() {
  it.skip('should be able to skip tests', function() {
    expect(true).to.equal(false);
  });

  it('should expose the correct global variables', function() {
    expect(protractor).to.exist;
    expect(browser).to.exist;
    expect(by).to.exist;
    expect(element).to.exist;
    expect($).to.exist;
  });
});


describe('John Papa Angular App on Jenkins', function() {

  beforeEach(function(){ browser.get('/') });

  describe('On the Home page', function() {
    it('should have a title in the browser tab', function() {

      expect(browser.getTitle()).to.eventually.eq('NG-Modular: dashboard');
    });

    it('should have a demo title', function() {

      var demoTitle = element(by.css('.brand-title'));
      expect(demoTitle.getText()).to.eventually.eq('Angular Modular Demo');
    });

    it('should display the application Author', function() {

      var author = element(by.css('.author'));
      expect(author.getText()).to.eventually.eq('Created by John Papa');
    });

    it('should display the Dashboard elements', function() {

      var dash = element(by.id('dashboard-view'));
      expect(dash.isPresent()).to.eventually.be.true;
    });

    it('should display the Avengers elements', function() {
      browser.get('/#/avengers');
      var avenger = element(by.id('avengers-view'));
      expect(avenger.isPresent()).to.eventually.be.true;
    });
  });
});
