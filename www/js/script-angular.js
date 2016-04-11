(function(angular) {
    'use strict';
    var someApp = angular.module('beanApp', [])

    .controller('MainCtrl', ['$scope', function($scope) {}])

    /* Declare the graph directive as Element type */
    someApp.directive('canvasContainer', function() {      
        return {
            restrict: 'E',
            templateUrl: 'views/view.html'
        }
    });

})(window.angular);