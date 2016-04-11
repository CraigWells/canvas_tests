(function(angular) {
    'use strict';
    var someApp = angular.module('beanApp', [])

    .controller('MainCtrl', ['$scope', function($scope) {}])

    .controller('viewCtrl', ['$scope', function($scope) {
        // https://www.w3.org/TR/2dcontext/#the-canvas-state
        var Canvas = document.getElementById('mainCanvas');
        var context = Canvas.getContext("2d");
        console.log(context);

        context.beginPath();
        context.moveTo(0,0);
        //context.setLineDash([1, 10, 5, 10, 1, 5, 10, 5])
        context.lineTo(200,200);
        context.stroke();
    }])

    /* Declare the graph directive as Element type */
    someApp.directive('canvasContainer', function() {      
        return {
            restrict: 'E',
            templateUrl: 'views/view.html'
        }
    });

})(window.angular);