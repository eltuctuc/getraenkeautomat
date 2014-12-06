'use strict';

/**
 * @ngdoc controller
 * @name myApp.mainModule.controllers:MainCtrl
 *
 * @description
 *
 * @requires $scope
 * @requires $log
 * @requires CoinsService
 * @requires SlotsService
 * */

angular.module('myApp.mainModule.controllers').controller('MainCtrl',
	[
		'$scope', '$log', 'CoinsService', 'SlotsService',
		function($scope, $log, CoinsService, SlotsService) {
			$log.info('Main Ctrl started');

			$scope.slots = SlotsService.getAll();

			$scope.coins = CoinsService.getInputTotal();
			$scope.output = '';
			$scope.msg = '';


			$scope.totalCoins = CoinsService.getTotalCoins();
			$scope.inputCoins = CoinsService.getInputCoins();
		}
	])
;
