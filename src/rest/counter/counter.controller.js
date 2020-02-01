(function() {
    angular.module('vw.counter')
        .controller('vwCounterController', ['$scope', function ($scope) {
            
            $scope.count = 0;

            $scope.increment = function () {
                $scope.count += 1;
            }

            $scope.decrement = function () {
                $scope.count -= 1;
            }
        }])
})()