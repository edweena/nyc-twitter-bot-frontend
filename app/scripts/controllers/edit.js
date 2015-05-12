'use strict';

/**
 * @ngdoc function
 * @name twitterBotFrontendApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the twitterBotFrontendApp
 */
angular.module('twitterBotFrontendApp').controller('EditCtrl', [
	'$scope',
	'$state',
	'contentFarm',
	function ($scope, $state, contentFarm) {

		$scope.tweet = {};
		$scope.response = {};

		var id = $state.params.id;
		$scope.response._id = id;



		// ------------------------------------------------
		// Get tweet
		//

		contentFarm.show(id).then(function(response){
			$scope.tweet = response;
			$scope.response.text = response.text;
		});


		
		



		// ------------------------------------------------
		// New tweet response
		//
		$scope.submit = function(){
			contentFarm.update(id, $scope.response).then(function(response){
				var oldPos = _.findIndex($scope.tweets, {'_id': id});

				if (oldPos > -1){
					$scope.tweets.splice(oldPos, 1);
				}

				$scope.tweets.push(response);
				$state.go('home');
			});
		};


		// ------------------------------------------------
		// Delete
		//
		$scope.destroy = function(id){
			var value = confirm('Are you sure?');

			if (value === true){
				contentFarm.destroy(id).then(function(response){
					console.log(response);
					var pos = _.findIndex($scope.tweets, {'_id': id});

					if (pos > -1){
						$scope.tweets.splice(pos, 1);
					}
				});
			}
			
		};
	}
]);
