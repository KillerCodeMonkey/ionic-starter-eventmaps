define([
  'app'
], function (app) {
  'use strict';

  app.controller('AppCtrl', [
    '$scope',
    function ($scope) {
      $scope.ready = true;
    }
  ]);
});
