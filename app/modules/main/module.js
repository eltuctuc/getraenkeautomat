'use strict';

/**
 * @ngdoc config
 * @name myApp.config:Main
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $routeProvider
 **/

angular.module('myApp.mainModule', [
		'myApp.mainModule.controllers',
		'myApp.mainModule.services',
		'myApp.mainModule.directives',
		'ngRoute'
	])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/main', {
			templateUrl: 'modules/main/views/index.html',
			controller: 'MainCtrl'
		});
	}])
;

angular.module('myApp.mainModule.controllers', []);
angular.module('myApp.mainModule.services', []);
angular.module('myApp.mainModule.directives', []);
