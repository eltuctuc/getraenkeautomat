'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($scope, $log, CoinService, SlotService, CalculationService) {
    $log.log('MainCtrl started');

    $scope.slots = SlotService.getAll();

    $scope.coins = CoinService.getInputTotal();
    $scope.output = '';
    $scope.msg = '';

    $scope.totalCoins = CoinService.getTotalCoins();
    $scope.inputCoins = CoinService.getInputCoins();

    /**
     * Einwurf
     * @param coinId
     */
    $scope.addCoins = function (coinId) {
      CoinService.addInputCoins(coinId);
      $scope.coins = CoinService.getInputTotal();
    };

    /**
     * Geld zurück
     */
    $scope.getCoinsBack = function () {
      var coins = CoinService.resetInputCoins();
      $scope.coins = CoinService.getInputTotal();

      $scope.output = '';
      $scope.msg = '';
      $scope.output = CalculationService.getCoins(coins);
    };

    /**
     * Getränk + Restgeld
     * @param index
     */
    $scope.getDrink = function (index) {
      if($scope.slots[index] !== undefined) {
        $scope.output = '';
        $scope.msg = '';

        var coins = CoinService.getAllcoins();
        var returns = CalculationService.getReturn($scope.coins-$scope.slots[index].value, coins);

        if(returns === false) {
          coins = CoinService.resetInputCoins();
          $scope.coins = CoinService.getInputTotal();

          $scope.output = '';
          $scope.msg = 'Nicht genügend Wechselgeld.';
          $scope.output = CalculationService.getCoins(coins);
        }

        var slot = $scope.slots[index];

        if(slot.amount > 0) {
          if($scope.coins === 0) {
            $scope.msg = '';
          }
          if($scope.coins < slot.value) {
            $scope.output = '';
            $scope.msg = 'Nicht genügend Geld eingeworfen.';
            return;
          }

          CoinService.addInputCoinsToTotalCoins();
          CoinService.reduceTotalCoins($scope.coins-$scope.slots[index].value);

          $log.log(CoinService.getAllcoins());

          slot.amount--;
          $scope.output = '1 '+slot.name;

          $scope.output += (returns !== '') ? ' und '+returns : '';
        }
      }
    };

    /**
     * Lager ein- und ausblenden
     */
    angular.element('#stock').hide();
    $scope.toggleStock = function () {
      angular.element('#stock').toggle();
    };

    /**
     * Auffüllen
     */
    $scope.fillIn = function () {
      for(var s=0; s<$scope.slots.length; s++) {
        $scope.slots[s].amount+=$scope.slots[s].fill;
        $scope.slots[s].fill = 0;
      }
      for(var c=0; c<$scope.totalCoins.length; c++) {
        $scope.totalCoins[c].amount+=$scope.totalCoins[c].fill;
        $scope.totalCoins[c].fill = 0;
      }
    };
  });
