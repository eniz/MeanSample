
angular.module('meanSampleApp', [])
	.factory('liveScoreAPIservice', function ($resource) {

		var liveScoreAPI =  {};

		liveScoreAPI.getScores = function () {
			return $resource({
				method: 'JSON',
				url: 'http://polar-sands-8448.herokuapp.com/api/scores'
			});
		};

		return liveScoreAPI;
	});
