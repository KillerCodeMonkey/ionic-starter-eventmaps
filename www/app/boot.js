// requires routes, config, run they implicit requiring the app
require([
  'routes',
  'config',
  'run'
], function () {
  'use strict';
  // Here you have to set your app name to bootstrap it manually
  angular.bootstrap(document, ['app']);
});
