module.exports = function (grunt) {
  var browsers = [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '52'
  }, {
    browserName: 'chrome',
    platform: 'Linux',
    version: '48'
  }, {
    browserName: 'firefox',
    platform: 'Windows 10',
    version: '47'
  }, {
    browserName: 'firefox',
    platform: 'Windows 10',
    version: '48'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '9'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 8',
    version: '10'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 10',
    version: '11'
  }, {
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: '13.10586'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.9',
    version: '7'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.10',
    version: '8'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.11',
    version: '9'
  }, {
    browserName: 'Android',
    platform: 'Linux',
    version: '5.1'
  }, {
    browserName: "iphone",
    platform: "OS X 10.11",
    version: "9.3"
  }];

  var buildId = process.env.TRAVIS_JOB_ID ? process.env.TRAVIS_JOB_ID : Math.floor(Math.random() * 10000);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-mocha': {
      all: {
        options: {
          urls: [
            'http://127.0.0.1:9999/test_runner/index.html'
          ],
          browsers: browsers,
          build: buildId,
          testname: 'mocha tests',
          throttled: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', ['connect', 'saucelabs-mocha']);
};