'use strict';

/**
 * @ngdoc config
 * @name myApp.config:About
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $routeProvider
 * */

angular.module('myApp.aboutModule', [
	'myApp.aboutModule.controllers',
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'modules/about/views/index.html',
		controller: 'AboutCtrl'
	});
}])

;
