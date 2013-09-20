'use strict';


// Declare app level module which depends on filters, and services
angular.module("mathiApp", [])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');
        $routeProvider
            .when('/cv', { templateUrl: 'cv.html' })
            .otherwise( { templateUrl: 'start.html' } );
    });