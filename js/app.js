'use strict';


// Declare app level module which depends on filters, and services
angular.module("mathiApp", [])
    .config(function($routeProvider) {
        $routeProvider
            .when('/cv',
            {
                templateUrl: 'cv.html'
            })
            .otherwise( { templateUrl: 'start.html' } );
    });