define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailCtrl', [
    '$scope',
    '$stateParams',
    'eventService',
    function ($scope, $stateParams, eventService) {
      $scope.loading = true;
      eventService.getOne($stateParams.id).then(function (event) {
        $scope.event = event;
      }).finally(function () {
        $scope.loading = false;
      });

      $scope.reload = function () {
        eventService.getOne($stateParams.id).then(function (event) {
          $scope.event = event;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };
    }
  ]);
});
