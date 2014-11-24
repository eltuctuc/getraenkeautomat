'use strict';

/**
 * @ngdoc config
 * @name myApp.config:Main
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $routeProvider
 * */

angular.module('myApp.main', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/main', {
			templateUrl: 'modules/main/views/index.html',
			controller: 'MainCtrl'
		});
	}])

;
