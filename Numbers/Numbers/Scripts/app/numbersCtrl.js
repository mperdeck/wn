numbersApp.controller('numbersCtrl', ['$scope', 'sequenceGenerator', function ($scope, sequenceGenerator) {
    'use strict';

    // Default value for the input box that creates nice sequences
    $scope.userInput = 5;

    var updateSequences = function (upperBound) {
        $scope.allNumbers = sequenceGenerator.allNumbers(upperBound);
        $scope.oddNumbers = sequenceGenerator.oddNumbers(upperBound);
        $scope.evenNumbers = sequenceGenerator.evenNumbers(upperBound);
        $scope.extendedFizzBuzz = sequenceGenerator.extendedFizzBuzz(upperBound);
        $scope.fibonacci = sequenceGenerator.fibonacci(upperBound);
    }

    // Generate sequences for default input value when the page loads
    updateSequences($scope.userInput);

    $scope.userInputChanged = function () {
        updateSequences($scope.userInput);
    };

}]);


