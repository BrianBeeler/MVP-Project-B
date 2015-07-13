angular.module('fizzbuzz', []);

new controller('fizzBuzzCtrl', function($scope) {
  $scope.numClicks = 0
  $scope.increment = function() {
    $scope.numClicks++
  }
  $scope.display = function() {
    if ($scope.numClicks%3===0 && $scope.numClicks%5===0) {
      return "FIZZBUZZ"
    }
    else if ($scope.numClicks%3===0) {
      return "FIZZ"
    }
    else if ($scope.numClicks%5===0) {
      return "BUZZ"
    }
    else {
      return $scope.numClicks
    }

  }


})
