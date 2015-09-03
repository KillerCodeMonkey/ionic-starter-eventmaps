define([
  'app',
  // Load Controllers here
  'controllers/dashboard',
  'controllers/results'
], function (app) {
  'use strict';
  // definition of routes
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // url routes/states
      $urlRouterProvider.otherwise('dashboard');

      $stateProvider
        // app states
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/templates/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('results', {
          url: '/results/:search/:wheelChair/:wheelChairLift',
          controller: 'ResultsCtrl',
          templateUrl: 'app/templates/results.html'
        })
        .state('results.detail', {
          url: 'graph/:id',
          templateUrl: 'app/templates/detail.html'
        });
    }
  ]);
});
