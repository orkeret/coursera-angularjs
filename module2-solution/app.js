(function() {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  // ToBuyController
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.buy = function(index) {
      ShoppingListCheckOffService.buy(index);
    }

    ctrl.items = ShoppingListCheckOffService.getToBuyItems();
  }

  // AlreadyBoughtController
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  // ShoppingListCheckOffService
  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{name: "Cookies", quantity: 10}, {name: "Mushrooms", quantity: 3}, {name: "Diapers", quantity: 2}, {name: "Toilet Papers", quantity: 24}, {name: "Toothpaste", quantity: 4}];
    var boughtItems = [];

    service.buy = function(index) {
      var singletonItemArr = toBuyItems.splice(index, 1); // splice returns an array (and since the argument is 1 -> the returned array would be of length === 1)
      var item = singletonItemArr[0];
      boughtItems.push(item);
    }

    service.getToBuyItems = function() {
      return toBuyItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }
  }

})();
