'use strict';

describe('Controller: AuthorCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var AuthorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorCtrl = $controller('AuthorCtrl', {
      $scope: scope
    });
  }));
});
