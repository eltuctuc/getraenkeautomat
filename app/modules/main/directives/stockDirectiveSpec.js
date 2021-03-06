/**
 * @module test.myApp.main.directives
 * @name stock
 * @description
 * Tests for stock under myApp.main.directives
 * _Enter the test description._
 **/

describe('Directive: myApp.main.directives.stock', function () {
	'use strict';

	var ele, scope;

	beforeEach(module('myApp.main.directives'));
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();

		//update the line below!
		ele = angular.element('<Replace with directive>');
		//update the above line if you haven't!
		$compile(ele)(scope);
		scope.$apply();
	}));

	/**
	 * @description
	 * Sample test case to check if HTML rendered by the directive is non empty
	 * */
	it('should not render empty html', function () {
		scope.$apply(function () {

			/**
			 * Set the scope properties here.
			 * scope.desc = 'test hostname';
			 * scope.status = 'valid';
			 *
			 */
		});
		expect(ele.html()).not.toBe('');
	});
});
