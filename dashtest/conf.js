// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  files: ['../bower_components/angular/angular.min.js',
		  '../bower_components/angular-mocks/angular-mocks.js',
		  '../controllers/dashController.js']
}