'use strict';

/**
 * @module myApp.about
 * @name AboutCtrl
 * @description
 * Tests for AboutCtrl under myApp
 * _Enter the test description._
 * */

describe('myApp.about module', function() {

  beforeEach(module('myApp.about.controllers'));

  describe('about controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var AboutCtrl = $controller('AboutCtrl');
      expect(AboutCtrl).toBeDefined();
    }));

  });
});
