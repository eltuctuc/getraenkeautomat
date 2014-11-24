'use strict';

/**
 * @ngdoc controller
 * @name myApp.controller:MainCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */

angular.module('myApp.main')

	/**
	 * Controller
	 */
	.controller('MainCtrl', [
		'$scope', '$log',
		function($scope, $log) {
			$log.info('Main Ctrl started');
		}
	])
;
