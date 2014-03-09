'use strict';

angular.module('sampleApp')
  .controller('MatchListCtrl', function ($scope, $http) {
    $http.get('/api/matchList').success(function(response) {
    	console.log("Data:" + response);
      	$scope.matchList = response.matches;
    });
  });