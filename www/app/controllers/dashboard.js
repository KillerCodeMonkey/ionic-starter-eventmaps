define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DashboardCtrl', [
    '$scope',
    '$state',
    function ($scope, $state) {
      $scope.search = {};
      $scope.goToList = function () {
        $state.go('results.list', {
          search: $scope.search.string,
          wheelChair: $scope.search.wheelChair,
          wheelChairLift: $scope.search.wheelChairLift
        }).then(function () {
          console.log('test');
        }, function () {
          console.log(arguments);
        });
      };
    }
  ]);
});
