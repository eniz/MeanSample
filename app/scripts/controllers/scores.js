

angular.module('meanSampleApp')
  .controller('SoccerScoresCtrl', function ($scope, liveScoreAPIservice) {
  	 $scope.matchList = [];
  	 liveScoreAPIservice.getScores().success(function (response) {
  	 	console.log(response);
  	 	$scope.matchList = response.matches;
  	 });
  });
