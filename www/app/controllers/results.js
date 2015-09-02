define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('ResultsCtrl', [
    '$scope',
    '$stateParams',
    'eventService',
    function ($scope, $stateParams, eventService) {
      $scope.limit = 10;

      // show next 10
      $scope.loadMore = function () {
        $scope.limit += 10;
      };

      $scope.$on('$ionicView.enter', function () {
        var wheelChair = $stateParams.wheelChair === 'true',
            wheelChairLift = $stateParams.wheelChairLift === 'true',
            search = $stateParams.search;

        if (wheelChair !== $scope.wheelChair || wheelChairLift !== $scope.wheelChairLift || search !== $scope.search) {
          $scope.wheelChair = wheelChair;
          $scope.wheelChairLift = wheelChairLift;
          $scope.search = search;

          eventService.search(search, wheelChair, wheelChairLift).then(function (events) {
            $scope.limit = 10;
            $scope.events = events;
          });
        }
      });
    }
  ]);
});
