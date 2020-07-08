// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const reporter = require('cucumber-html-reporter')

exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/steps/*.steps.ts',
      './e2e/Hooks/*.ts'
    ], 
  
    format: [
      'json:./cucumberreport.json'
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  },
  onComplete: () =>{
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
  };

  reporter.generate(options);
}
}
