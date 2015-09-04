/* globals define, document */
define([
  'app'
], function (app) {
  'use strict';

  app.directive('googleMap', [
    '$state',
    '$window',
    function ($state, $window) {
      return {
        scope: {
          events: '=',
          apiKey: '@'
        },
        restrict: 'A',
        link: function (scope, element) {
          var counter = 0,
              map,
              eventsReady = false;

          function addClick(marker, id) {
            $window.google.maps.event.addListener(marker, 'click', function () {
              $state.go('detail', {
                id: id
              });
            });
          }

          function makeMarkers() {
            if (eventsReady || !scope.events) {
              return;
            }
            eventsReady = true;

            var i = 0,
                mapsMarker;
            for (i; i < scope.events.length; i = i + 1) {
              mapsMarker = new $window.google.maps.Marker({
                  position: new $window.google.maps.LatLng(scope.events[i].lat, scope.events[i].lng),
                  map: map,
                  clickable: true
              });
              // center on first hit
              if (!i) {
                map.setCenter(mapsMarker.getPosition());
              }
              addClick(mapsMarker, scope.events[i].id);
            }
          }

          var watcher = scope.$watch(function () {
            return scope.events;
          }, function (events) {
            if (events && events.length) {
              if (map) {
                makeMarkers();
              }
              watcher();
            }
          });

          function makeMapAndMarkers() {
            var mapOptions = {
                zoom: 13,
                disableDefaultUI: true
            };
            if (!map) {
              map = new $window.google.maps.Map(element[0], mapOptions);
            }
            makeMarkers();
          }

          //load google maps api script async, avoiding 'document.write' error
          function injectGoogle() {
            var cbId,
                wf,
                s,
                apiKey;

            //callback id
            cbId = '_gmap_' + counter;
            $window[cbId] = makeMapAndMarkers;
            apiKey = 'key=' + scope.apiKey + '&';
            wf = document.createElement('script');
            wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
                 '://maps.googleapis.com/maps/api/js?' + apiKey + 'v=3&sensor=true&callback=' + cbId;
            wf.type = 'text/javascript';
            wf.async = 'true';
            document.body.appendChild(wf);
          }

          if (!$window.google) {
            counter += 1;
            injectGoogle();
          } else {
            makeMapAndMarkers();
          }
        }
      };
    }
  ]);
});
