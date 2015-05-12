'use strict';
/* global _:false */

/**
 * @ngdoc function
 * @name twitterBotFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterBotFrontendApp
 */
angular.module('twitterBotFrontendApp').controller('MainCtrl', [
	'$scope',
	'$state',
	'contentFarm',
	function ($scope, $state, contentFarm) {

		$scope.tweets = [];
		$scope.response = {};


		// ------------------------------------------------
		// Show all tweets
		//
		
		contentFarm.index().then(function(response){
			$scope.tweets = response;
			console.log(response);
		});


		// ------------------------------------------------
		// New tweet response
		//
		$scope.submit = function(){
			contentFarm.create($scope.response).then(function(response){
				$scope.tweets.push(response);

				// ------------------------------------------------
				// clear out
				//
				
				$scope.response = {};
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
