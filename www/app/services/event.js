define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.service('eventService', [
    '$q',
    '$timeout',
    'dataService',
    function ($q, $timeout, dataService) {

      function check(currentEvent, satTrans, wheelChair, wheelChairLift) {
        if (satTrans && wheelChair && wheelChairLift) {
          if (!currentEvent.satTrans || !currentEvent.wheelChair || !currentEvent.wheelChairLift) {
            return false;
          }
        } else if (satTrans && wheelChair) {
          if (!currentEvent.satTrans || !currentEvent.wheelChair) {
            return false;
          }
        } else if (wheelChair && wheelChairLift) {
          if (!currentEvent.wheelChair || !currentEvent.wheelChairLift) {
            return false;
          }
        } else if (satTrans && wheelChairLift) {
          if (!currentEvent.satTrans || !currentEvent.wheelChairLift) {
            return false;
          }
        } else if (satTrans && !currentEvent.satTrans) {
          return false;
        } else if (wheelChair && !currentEvent.wheelChair) {
          return false;
        } else if (wheelChairLift && !currentEvent.wheelChairLift) {
          return false;
        }

        return true;
      }


      this.search = function (searchString, satTrans, wheelChair, wheelChairLift) {
        var events = dataService.events,
            deferred = $q.defer(),
            founds = [],
            currentEvent,
            i = 0;

        for (i; i < events.length; i = i + 1) {
          currentEvent = events[i];
          if (currentEvent.name && currentEvent.name.indexOf(searchString) !== -1 || currentEvent.city && currentEvent.city.indexOf(searchString) !== -1 || currentEvent.district && currentEvent.district.indexOf(searchString) !== -1) {
            if (check(currentEvent, satTrans, wheelChair, wheelChairLift)) {
              currentEvent.thumb = 'http://lorempixel.com/200/200/sports/?' + ((new Date()).getTime() + i);
              founds.push(currentEvent);
            }
          }
        }
        // simulate asynchronous requests
        $timeout(function () {
          deferred.resolve(angular.copy(founds));
        }, 2000);

        return deferred.promise;
      };

      this.getNext = function () {
        var deferred = $q.defer(),
            events = [],
            i = 0;

        for (i; i < dataService.events.length; i = i + 1) {
          if (i === 5) {
            break;
          }
          dataService.events[i].thumb = 'http://lorempixel.com/200/200/sports/?' + ((new Date()).getTime() + i);
          events.push(dataService.events[i]);
        }

        $timeout(function () {
          deferred.resolve(events);
        }, 1000);

        return deferred.promise;
      };

      this.getOne = function (id) {
        var deferred = $q.defer(),
            event,
            i = 0;

        for (i; i < dataService.events.length; i = i + 1) {
          if (dataService.events[i].id.toString() === id.toString()) {
            event = angular.copy(dataService.events[i]);
            event.image = 'http://lorempixel.com/620/480/sports/?' + ((new Date()).getTime() + i);
            break;
          }
        }

        $timeout(function () {
          if (event) {
            deferred.resolve(event);
          } else {
            deferred.reject();
          }
        }, 1000);

        return deferred.promise;
      };
    }
  ]);
});
