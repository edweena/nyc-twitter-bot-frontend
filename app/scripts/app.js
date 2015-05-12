'use strict';

/**
 * @ngdoc overview
 * @name twitterBotFrontendApp
 * @description
 * # twitterBotFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('twitterBotFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/_main.html',
      controller: 'MainCtrl'
    })

    .state('home.new', {
      url: 'new',
      templateUrl: 'views/_main.new.html'
    })

    .state('home.edit', {
      url: 'edit/:id',
      templateUrl: 'views/_main.edit.html',
      controller: 'EditCtrl'
    });


  });
