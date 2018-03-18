(function() {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject(['$scope']);
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.messageColor = "";
  $scope.checkDishes = function() {

    if (!$scope.dishes) { // empty/undefined
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
      return;
    }

    // arr isn't empty (but might have only commas)
    var dishesAsArray = $scope.dishes.split(',');
    var nonEmptyDishes = dishesAsArray.filter(d => d.trim());

    if (nonEmptyDishes.length === 0) { // only commas scenario, e.g.: ",,,,,,,"
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
    } else if (nonEmptyDishes.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.messageColor = "green";
    } else { // more than 3
      $scope.message = "Too much!";
      $scope.messageColor = "green";
    }
    }
  };
})();
