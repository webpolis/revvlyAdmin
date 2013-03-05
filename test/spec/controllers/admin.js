'use strict';

describe('Controller: adminController', function () {
	// load the controller's module
	beforeEach(module('azureTicketsApp'));

	var adminController, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller) {
		scope = {};
		adminController = $controller('adminController', {
			$scope : scope
		});
	}));

	it('should initialize properly', function () {
		expect(scope.config).toBeDefined();
	});
});
