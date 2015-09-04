define([
  'app',
  'services/event',
  'directives/googleMaps'
], function (app) {
  'use strict';

  app.controller('ResultsCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$timeout',
    '$ionicHistory',
    'eventService',
    function ($scope, $stateParams, $state, $timeout, $ionicHistory, eventService) {
      var first = true;
      $scope.limit = 10;
      $scope.show = {
        list: true
      };

      // show next 10
      $scope.loadMore = function () {
        if (!first) {
          $timeout(function () {
            $scope.limit += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 2000);
          return;
        }
        first = false;

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
            $scope.$broadcast('scroll.infiniteScrollComplete');
          });
        } else {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }
      };

      $scope.reload = function () {
        $scope.loading = true;
        eventService.search($scope.search, $scope.wheelChair, $scope.wheelChairLift).then(function (events) {
          $scope.limit = 10;
          $scope.events = events;
        }).finally(function () {
          $scope.loading = false;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.goToMap = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.map', {
          search: $scope.string,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
      $scope.goToList = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.list', {
          search: $scope.search,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
    }
  ]);
});
