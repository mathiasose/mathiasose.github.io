'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module("mathiApp", [])
    .service('Dicts', function($http){
        // Creates the two dictionaries and populates them with data from a JSON file
        var en_dict = {};
        var no_dict = {};
        $http.get('js/lang.json')
            .success(function (lang_list) {
                angular.forEach(lang_list, function(lang_obj) {
                    en_dict[lang_obj.id] = lang_obj.en;
                    no_dict[lang_obj.id] = lang_obj.no;
                });
            });
        this.en_dict = en_dict;
        this.no_dict = no_dict;
    })
    .config(function($routeProvider, $locationProvider) {
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');
        $routeProvider
            .when('/cv', { templateUrl: 'cv.html' })
            .otherwise( { templateUrl: 'start.html' } );
    });