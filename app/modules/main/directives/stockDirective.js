/**
 * @ngdoc directive
 * @name myApp.main.directives.directive:stock
 *
 * @description
 * _Please update the description and restriction._
 *
 * @restrict A
 **/

angular.module('myApp.mainModule.directives')
	.directive('stock', [
		'$log',
		function ($log) {
			'use strict';

			$log.info('stock directives started');

			return {
				restrict: 'E',
				'scope': {
					items: '@initItem'
				},
				templateUrl: './modules/main/directives/templates/stock.html',
				link: function (scope, elem, attr) {
					$log.log(scope, elem, attr);
				}
			};
		}
	])
;
