/**
 * @module test.myApp.mainModule.services
 * @name SlotsService
 * @description
 * Tests for SlotsService under myApp
 * _Enter the test description._
 * */


describe('Service: myApp.mainModule.services.SlotsService', function () {

	// load the service's module
	beforeEach(module('myApp.mainModule.services'));

	// instantiate service
	var service;

	//update the injection
	beforeEach(inject(function (SlotsService) {
		service = SlotsService;
	}));

	/**
	 * @description
	 * Sample test case to check if the service is injected properly
	 * */
	it('should be injected and defined', function () {
		expect(service).toBeDefined();
	});
});
