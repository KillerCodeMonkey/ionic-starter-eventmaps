define([
  'app',
  'services/page'
], function (app) {
  'use strict';

  app.controller('AppCtrl', [
    '$scope',
    '$ionicModal',
    'pageService',
    function ($scope, $ionicModal, pageService) {
      $scope.ready = true;

      pageService.get().then(function (pages) {
        $scope.pages = pages;
      });

      $scope.open = function (index) {
        
      };
    }
  ]);
});
