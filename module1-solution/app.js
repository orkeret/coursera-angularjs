(function() {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject(['$scope']);
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.messageColor = "green";
  $scope.processDishes = function() {

    if (!$scope.dishes) { // empty/undefined
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
    } else { // there is at least one item
      var dishesAsArray = $scope.dishes.split(',');
      if (dishesAsArray.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageColor = "green";
      } else { // more than 3
        $scope.message = "Too much!";
        $scope.messageColor = "green";
      }
    }
  };
}
})();
