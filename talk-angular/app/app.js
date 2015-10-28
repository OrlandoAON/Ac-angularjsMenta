'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  // 'ngRoute',
  'myApp.controller',
  'myApp.version'
]).

 //   config(['$routeProvider', function($routeProvider) {

 //     $routeProvider.when('/home',
 //         { templateUrl: 'templates/home.html' ,
 //           controller: 'HomeCtrl'
 //         }
 //     )

 //     .otherwise({redirectTo: '/site-unavailable'});

  config(['$stateProvider','$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url:'/',
        templateURL:'templates/home.html',
        controller: 'HomeCtrl'

      })
      .state('search', {
        url:'/search/:query',
        templateURL:'templates/search.html',
        controller: 'SearchCtrl'
      });

      $urlRouterProvider.otherwise('/');

}]


);
