define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.service('pageService', [
    '$q',
    '$timeout',
    'dataService',
    function ($q, $timeout, dataService) {
      this.get = function () {
        var deferred = $q.defer();

        $timeout(function () {
          deferred.resolve(angular.copy(dataService.pages));
        }, 1000);

        return deferred.promise;
      };
    }
  ]);
});
