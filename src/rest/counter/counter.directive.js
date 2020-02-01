(function () {
    angular.module('vw.counter')
        .directive('vwCounter', function () {
            return {
                controller: 'vwCounterController',
                templateUrl: 'src/rest/counter/counter.template.html'
            }
        })
})()