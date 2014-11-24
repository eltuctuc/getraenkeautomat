'use strict';

/**
 * @ngdoc controller
 * @name myApp.controller:AboutCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */

angular.module('myApp.about')

	/**
	 * Controller
	 */
	.controller('AboutCtrl', [
		'$scope','$log',
		function($scope, $log) {
			$log.info('About Ctrl Started');

		}
	])
;
