// spec.js

describe('Dashboard App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8080/index.html');
    expect(browser.getTitle()).toEqual('dashboard');
  });
}); 

	/*
	'use strict';
	describe('dashController  test suite', function() {

	  describe('dashController', function() {
		var $scope;

		beforeEach(module('dashApp'));

		beforeEach(inject(function($rootScope, $controller) {
		  $scope = $rootScope.$new();
		  $controller('dashController', {
			$scope: $scope
		  });
		}));

		it('should return the right name of the application', function() {
		  expect($scope.appName).toBe('Dashboard App');
		});

	  });
	});
	*/