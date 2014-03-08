'use strict';

angular.module('meanSampleApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
