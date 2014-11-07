'use strict';

describe('Service: SlotService', function () {

  // load the service's module
  beforeEach(module('websiteApp'));

  // instantiate service
  var SlotService;
  beforeEach(inject(function (_SlotService_) {
    SlotService = _SlotService_;
  }));

  it('should do something', function () {
    expect(!!SlotService).toBe(true);
  });

});
