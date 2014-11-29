/**
 * @ngdoc service
 * @name myApp.mainModule.services.CoinsService
 * @description
 * # CoinService
 * Service in the websiteApp.
 *
 * @requires $log
 *
 **/

angular.module('myApp.mainModule.services')
	.service('CoinsService', [
		'$log',
		function ($log) {
			'use strict';
			$log.log('CoinsService started');

			var totalCoins = [
				{id: 'c10', name: '0,10 €', value: 10, amount: 10},
				{id: 'c20', name: '0,20 €', value: 20, amount: 10},
				{id: 'c50', name: '0,50 €', value: 50, amount: 10},
				{id: 'c100', name: '1,00 €', value: 100, amount: 10},
				{id: 'c200', name: '2,00 €', value: 200, amount: 10}
			];

			var inputCoins = [];

			/**
			 * Gesamtmünzenbestand ausgeben
			 * @returns {{id: string, name: string, value: number, amount: number}[]}
			 */
			var getTotalCoins = function () {
				return totalCoins;
			};

			/**
			 * Alle Münzen ausgeben
			 * @returns {{id: string, name: string, value: number, amount: number}[]}
			 */
			var getAllCoins = function () {
				var coins = [];
				for (var t = 0; t < totalCoins.length; t++) {
					coins.push(angular.copy(totalCoins[t]));
				}
				for (var c = 0; c < coins.length; c++) {
					for (var i = 0; i < inputCoins.length; i++) {
						if (coins[c].id === inputCoins[i].id) {
							coins[c].amount++;
						}
					}
				}
			};

			/**
			 * Einzelne Münze ausgeben
			 * @returns {{id: string, name: string, value: number, amount: number}}
			 * @param {string} id
			 */
			var getCoin = function (id) {
				if(angular.isUndefined(id)) return null;

				for(var i=0; i<totalCoins.length; i++) {
					if(totalCoins[i].id === id) {
						return totalCoins[i];
					}
				}

				return null;
			};

			/**
			 * Eingabemünze hinzufügen
			 * @param id
			 */
			var addInputCoins = function (id) {
				inputCoins.push(
					angular.copy(
						this.getCoin(id)
					)
				);
			};

			/**
			 * Gesamtwert der Eingabemünzen
			 * @returns {number}
			 */
			var getInputTotal = function () {
				var total = 0;
				for(var i=0; i<inputCoins.length; i++) {
					total += inputCoins[i].value;
				}
				return total;
			};

			/**
			 * Eingabemünzen zum Gesamt hinzufügen
			 */
			var addInputCoinsToTotalCoins = function () {
				$log.log('inputCoins',inputCoins);
				for(var i=0; i<inputCoins.length; i++) {
					for(var t=0; t<totalCoins.length; t++) {
						if(totalCoins[t].id === inputCoins[i].id) {
							totalCoins[t].amount++;
							$log.log('totalCoins[t]',totalCoins[t]);
						}
					}
				}
			};

			/**
			 * Münzen auffüllen
			 * @param coinObj
			 */
			var fill = function (coinObj) {
				for(var i=0; i<totalCoins.length; i++) {
					if(totalCoins[i].id === coinObj.id) {
						totalCoins[i].amount += coinObj.amount;
					}
				}
			};

			/**
			 * Restgeld ausgeben
			 * @param rest
			 */
			var reduceTotalCoins = function (rest) {
				var loops = 0;
				var maxLoops = 0;
				for(var i=0; i<totalCoins.length; i++) {
					maxLoops += totalCoins[i].amount;
				}

				var coin = null;
				var value = 0;

				while(rest > 0) {
					if(loops > maxLoops || loops > 100) {break;}

					for(var t=totalCoins.length-1; t>=0; t++) {
						coin = totalCoins[t];
						if(rest >= value && coin.amount > 0) {
							coin.amount--;
							rest-=value;
							continue;
						}
					}
				}
			};

			return {
				/**
				 * Gesamtmünzenbestand ausgeben
				 * @returns {{id: string, name: string, value: number, amount: number}[]}
				 */
				getTotalCoins : function () {
					return getTotalCoins()
				},

				/**
				 * Alle Münzen ausgeben
				 * @returns {{id: string, name: string, value: number, amount: number}[]}
				 */
				getAllCoins: function () {
					return getAllCoins();
				},

				/**
				 * Einzelne Münze ausgeben
				 * @returns {{id: string, name: string, value: number, amount: number}}
				 * @param {string} id
				 */
				getCoin: function (id) {
					return getCoin(id);
				},

				/**
				 * Eingabemünze hinzufügen
				 * @param id
				 */
				addInputCoins: function (id) {
					addInputCoins(id);
				},

				/**
				 * Gesamtwert der Eingabemünzen
				 * @returns {number}
				 */
				getInputTotal : function () {
					return getInputTotal();
				},

				/**
				 * Eingabemünzen verwerfen
				 * @returns {{id: string, name: string, value: number}[]}
				 */
				resetInputCoins: function () {
					var returnCoins = angular.copy(inputCoins);
					inputCoins = [];

					return returnCoins;
				},

				/**
				 * Eingegebene Münzen ausgeben
				 * @returns {Array}
				 */
				getInputCoins : function () {
					return inputCoins;
				},

				/**
				 * Eingabemünzen zum Gesamt hinzufügen
				 */
				addInputCoinsToTotalCoins: function () {
					addInputCoinsToTotalCoins();
				},

				/**
				 * Münzen auffüllen
				 * @param coinObj
				 */
				fill: function (coinObj) {
					fill(coinObj);
				},

				/**
				 * Restgeld ausgeben
				 * @param rest
				 */
				reduceTotalCoins: function (rest) {
					reduceTotalCoins(rest);
				}
			};
		}
	])
;

