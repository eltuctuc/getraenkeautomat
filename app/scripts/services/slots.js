'use strict';

/**
 * @ngdoc service
 * @name websiteApp.SlotService
 * @description
 * # SlotService
 * Service in the websiteApp.
 */
angular.module('websiteApp')
  .service('SlotService', function SlotService($log) {
    $log.log('SlotService started');

    var slots = [
      {'name': 'Cola',  'value': 1.3, 'fill': 0, 'amount': 5},
      {'name': 'Fanta', 'value': 1.2, 'fill': 0, 'amount': 5}
    ];

    return {
      /**
       * Alle Slots zurückgeben
       * @returns {{name: string, value: number, fill: number, amount: number}[]}
       */
      getAll: function () {
        return slots;
      }
    };
  });
