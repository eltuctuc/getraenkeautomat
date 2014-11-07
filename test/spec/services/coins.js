'use strict';

describe('Service: CoinService', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var CoinService;
  beforeEach(inject(function (_CoinService_) {
    CoinService = _CoinService_;
  }));

  it('should do something', function () {
    expect(!!CoinService).toBe(true);
  });

});
