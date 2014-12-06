/**
 * @ngdoc service
 * @name myApp.mainModule.services.SlotsService
 * @description
 * # SlotsService
 * Service in the websiteApp.
 *
 * @requires $log
 *
 **/

angular.module('myApp.mainModule.services')
	.service('SlotsService', [
		'$log',
		function ($log) {
			'use strict';
			$log.log('SlotsService started');

			var slots = [
				{'name': 'Cola',  'value': 130, 'fill': 0, 'amount': 5},
				{'name': 'Fanta', 'value': 120, 'fill': 0, 'amount': 5}
			];

			return {
				/**
				 * Alle Slots zurückgeben
				 * @returns {{name: string, value: number, fill: number, amount: number}[]}
				 */
				getAll: function () {
					return slots;
				}};
		}
	])
;

