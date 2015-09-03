define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('ResultsCtrl', [
    '$scope',
    '$stateParams',
    '$timeout',
    'eventService',
    function ($scope, $stateParams, $timeout, eventService) {
      var first = true;
      $scope.limit = 10;

      // show next 10
      $scope.loadMore = function () {
        if (!first) {
          $scope.limit += 10;
          $timeout(function () {
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 2000);
          return;
        }

        var wheelChair = $stateParams.wheelChair === 'true',
            wheelChairLift = $stateParams.wheelChairLift === 'true',
            search = $stateParams.search;

        if (wheelChair !== $scope.wheelChair || wheelChairLift !== $scope.wheelChairLift || search !== $scope.search) {
          $scope.wheelChair = wheelChair;
          $scope.wheelChairLift = wheelChairLift;
          $scope.search = search;
          $scope.loading = true;
          eventService.search(search, wheelChair, wheelChairLift).then(function (events) {
            $scope.limit = 10;
            $scope.events = events;
          }).finally(function () {
            $scope.loading = false;
          });
        }
      };

      $scope.reload = function () {
        eventService.search($scope.search, $scope.wheelChair, $scope.wheelChairLift).then(function (events) {
          $scope.limit = 10;
          $scope.events = events;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };
    }
  ]);
});
