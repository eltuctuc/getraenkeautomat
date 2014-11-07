'use strict';

/**
 * @ngdoc service
 * @name websiteApp.CalculationService
 * @description
 * # CalculationService
 * Service in the websiteApp.
 */
angular.module('websiteApp')
  .service('CalculationService', function CalculationService($log) {
    $log.log('CalculationService started');

    return {
      /**
       * Berechnung der Einzelmünzen
       * @param coins
       * @returns {*}
       */
      getCoins: function (coins) {
        if(!coins) {
          return null;
        }

        var returnCoins = [];
        var msg = '';
        for(var i=0; i<coins.length; i++) {
          var found = false;
          for(var r=0; r<returnCoins.length; r++) {
            if(returnCoins[r].id === coins[i].id) {
              returnCoins[r].amount++;
              found = true;
              break;
            }
          }
          if(!found) {
            returnCoins.push(coins[i]);
          }
        }

        for(var c=0;c<returnCoins.length; c++) {
          msg += returnCoins[c].amount+' x '+returnCoins[c].name+' + ';
        }
        return msg.substring(0, msg.length-3) + ' zurück';
      },

      /**
       * Berechnung der Restmünzen
       * @param rest
       * @param coins
       * @returns {*}
       */
      getReturn: function (rest, coins) {
        rest = Math.round(rest*10);

        var loops = 0;
        var maxLoops = 0;
        for(var i=0; i<coins.length; i++) {
          maxLoops += coins[i].amount;
        }

        var returnCoins = [];
        var coin = null;
        var value = 0;

        while(rest > 0) {
          if(loops > maxLoops || loops > 100) {break;}

          coin = coins[4];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            returnCoins.push({'id':coin.id,  'name': coin.name,  'value': coin.value, 'amount': 1 });
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = coins[3];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            returnCoins.push({'id':coin.id,  'name': coin.name,  'value': coin.value, 'amount': 1 });
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = coins[2];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            returnCoins.push({'id':coin.id,  'name': coin.name,  'value': coin.value, 'amount': 1 });
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = coins[1];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            returnCoins.push({'id':coin.id,  'name': coin.name,  'value': coin.value, 'amount': 1 });
            coin.amount--;
            rest-=value;
            continue;
          }

          coin = coins[0];
          value = (coin.value*10);
          if(rest >= value && coin.amount > 0) {
            returnCoins.push({'id':coin.id,  'name': coin.name,  'value': coin.value, 'amount': 1 });
            coin.amount--;
            rest-=value;
            continue;
          }
          loops++;
        }
        if(rest > 0) {
          return false;
        }
        return returnCoins;
      }
    };
  });
