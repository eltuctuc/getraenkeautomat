'use strict';

/**
 * @ngdoc service
 * @name websiteApp.CoinService
 * @description
 * # CoinService
 * Service in the websiteApp.
 */
angular.module('websiteApp')
  .service('CoinService', function CoinService($log) {
    $log.log('CoinService started');

    var totalCoins = [
      {'id':'c10',  'name': '0,10 €',  'value': 0.1, 'amount': 1, 'fill': 0 },
      {'id':'c20',  'name': '0,20 €',  'value': 0.2, 'amount': 1, 'fill': 0 },
      {'id':'c50',  'name': '0,50 €',  'value': 0.5, 'amount': 1, 'fill': 0 },
      {'id':'c100', 'name': '1,00 €',  'value': 1,   'amount': 1, 'fill': 0 },
      {'id':'c200', 'name': '2,00 €',  'value': 2,   'amount': 1, 'fill': 0 }
    ];

    var inputCoins = [];

    return {
      /**
       * Eingabemünze hinzufügen
       * @param id
       */
      addInputCoins: function (id) {
        inputCoins.push(
          angular.copy(
            this.getCoin(id)
          )
        );
      },

      /**
       * Eingabemünzen zum Gesamt hinzufügen
       */
      addInputCoinsToTotalCoins: function () {
        $log.log('inputCoins',inputCoins);
        for(var i=0; i<inputCoins.length; i++) {
          for(var t=0; t<totalCoins.length; t++) {
            if(totalCoins[t].id === inputCoins[i].id) {
              totalCoins[t].amount++;
              $log.log('totalCoins[t]',totalCoins[t]);
            }
          }
        }
      },

      /**
       * Restgeld ausgeben
       * @param rest
       */
      reduceTotalCoins: function (rest) {
        rest = Math.round(rest*10);

        var loops = 0;
        var maxLoops = 0;
        for(var i=0; i<totalCoins.length; i++) {
          maxLoops += totalCoins[i].amount;
        }

        var coin = null;
        var value = 0;

        while(rest > 0.9) {
          if(loops > maxLoops || loops > 100) {break;}

          coin = totalCoins[4];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = totalCoins[3];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = totalCoins[2];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = totalCoins[1];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = totalCoins[0];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            coin.amount--;
            rest-=value;
            continue;
          }
        }
      },

      /**
       * Eingabemünzen verwerfen
       * @returns {*}
       */
      resetInputCoins: function () {
        var returnCoins = angular.copy(inputCoins);
        inputCoins = [];

        return returnCoins;
      },

      /**
       * Münzen auffüllen
       * @param coinObj
       */
      fill: function (coinObj) {
        for(var i=0; i<totalCoins.length; i++) {
          if(totalCoins[i].id === coinObj.id) {
            totalCoins[i].amount += coinObj.amount;
          }
        }
      },

      /**
       * Alle Münzen ausgeben
       * @returns {Array}
       */
      getAllcoins: function () {
        var coins = [];
        for(var t=0; t<totalCoins.length; t++) {
          coins.push(angular.copy(totalCoins[t]));
        }
        for(var c=0; c<coins.length; c++) {
          for(var i=0; i<inputCoins.length; i++) {
            if(coins[c].id === inputCoins[i].id) {
              coins[c].amount++;
            }
          }
        }

        return coins;
      },

      /**
       * Einzelne Münze ausgeben
       * @param id
       * @returns {*}
       */
      getCoin : function (id) {
        for(var i=0; i<totalCoins.length; i++) {
          if(totalCoins[i].id === id) {return totalCoins[i];}
        }
        return null;
      },

      /**
       * Gesamtmünzenbestand ausgeben
       * @returns {{id: string, name: string, value: number, amount: number, fill: number}[]}
       */
      getTotalCoins : function () {
        return totalCoins;
      },

      /**
       * Eingegebene Münzen ausgeben
       * @returns {Array}
       */
      getInputCoins : function () {
        return inputCoins;
      },

      /**
       * Gesamtwert der Eingabemünzen
       * @returns {number}
       */
      getInputTotal : function () {
        var total = 0;
        for(var i=0; i<inputCoins.length; i++) {
          total += inputCoins[i].value;
        }
        return total;
      }
    };
  });
