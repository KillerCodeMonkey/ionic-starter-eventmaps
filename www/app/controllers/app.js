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

      $ionicModal.fromTemplateUrl('/app/templates/page.html').then(function (modal) {
        $scope.modal = modal;
      });

      $scope.open = function (index) {
        $scope.modal.show().then(function () {
          
        });
      };
    }
  ]);
});
