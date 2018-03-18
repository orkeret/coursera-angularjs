(function() {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject(['$scope']);
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.messageColor = "";
  $scope.processDishes = function() {

    if (!$scope.dishes) { // empty/undefined
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
    } else { // arr isn't empty (but might have only commas)
      var dishesAsArray = $scope.dishes.split(',');
      var numOfItems = countNonEmptyItems(dishesAsArray);

      if (numOfItems === 0) { // only commas scenario, e.g.: ",,,,,,,"
        $scope.message = "Please enter data first";
        $scope.messageColor = "red";
      } else if (numOfItems <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageColor = "green";
      } else { // more than 3
        $scope.message = "Too much!";
        $scope.messageColor = "green";
      }
    }
  };
}

// precondtion - arr.length >= 1
function countNonEmptyItems(arr) {
  var counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim()) {
      counter++;
    }
  }

  return counter;
}
})();
