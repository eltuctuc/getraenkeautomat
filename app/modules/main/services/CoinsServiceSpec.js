/**
 * @module test.myApp
 * @name CoinsService
 * @description
 * Tests for CoinsService under myApp
 * _Enter the test description._
 * */


describe('Service: myApp.mainModule.services.CoinsService', function () {

    // load the service's module
    beforeEach(module('myApp.mainModule.services'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (CoinsService) {
        service = CoinsService;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
