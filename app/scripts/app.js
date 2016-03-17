'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
    .module('mytodoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'ui.bootstrap',
        'LocalStorageModule',
        'angular-loading-bar'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('ls');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller : 'MainCtrl',
                activetab: 'index'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller : 'AboutCtrl',
                activetab: 'about'
            })
            .otherwise({
                redirectTo: '/',
                activetab: 'index'
            });
    });
