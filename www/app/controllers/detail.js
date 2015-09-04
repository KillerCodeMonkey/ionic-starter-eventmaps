define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailCtrl', [
    '$scope',
    '$stateParams',
    '$window',
    'eventService',
    function ($scope, $stateParams, $window, eventService) {
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

      $scope.call = function () {
        $window.open('tel://' + $scope.event.contact.tel, '_system');
      };

      $scope.mail = function () {
        $window.open('mail://' + $scope.event.contact.email, '_system');
      };

      $scope.website = function () {
        $window.open($scope.event.website, '_system');
      };
    }
  ]);
});
