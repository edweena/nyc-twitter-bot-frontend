'use strict';

/**
 * @ngdoc service
 * @name twitterBotFrontendApp.contentFarm
 * @description
 * # contentFarm
 * Factory in the twitterBotFrontendApp.
 */
angular.module('twitterBotFrontendApp').factory('contentFarm', function ($http, $q) {

    var content = {
     
      url: 'https://rbma-twitter-bot.herokuapp.com/api/responses',

      // ------------------------------------------------
      // Index
      //
      
      index: function(){
        var self = this;
        var deferred = $q.defer();

        $http.get(self.url).success(function(response){
          deferred.resolve(response);
        }).error(function(err){
          deferred.reject(err);
          console.log(err);
        });

        return deferred.promise;
      },


      // ------------------------------------------------
      // Create
      //
      
      create: function(form){
        var self = this;
        var deferred = $q.defer();

        $http.post(self.url, form).success(function(response){
          deferred.resolve(response);
        }).error(function(err){
          deferred.reject(err);
          console.log(err);
        });

        return deferred.promise;
      },



      // ------------------------------------------------
      // Show
      //

      show: function(id){
        var self = this;
        var deferred = $q.defer();

        $http.get(self.url + '/' + id).success(function(response){
          deferred.resolve(response);
        }).error(function(err){
          deferred.reject(err);
          console.log(err);
        });

        return deferred.promise;
      },

      // ------------------------------------------------
      // Destroy
      //
      destroy: function(id){
        var self = this;
        var deferred = $q.defer();

        $http.delete(self.url + '/' + id).success(function(response){
          deferred.resolve(response);

        }).error(function(err){
          deferred.reject(err);
          console.log(err);
        });

        return deferred.promise;
      },


      // ------------------------------------------------
      // Update
      //
      update: function(id, form){
        var self = this;
        var deferred = $q.defer();

        $http.put(self.url + '/' + id, form).success(function(response){
          deferred.resolve(response);
        }).error(function(err){
          console.log(err);
          deferred.reject(err);
        });

        return deferred.promise;
      }
      
      




    };





    // -------------------------------------------------
    //
    // Public API
    // 
    // -------------------------------------------------
    
    return {
      index: function(){
        return content.index();
      },
      create: function(form){
        return content.create(form);
      },
      show: function(id){
        return content.show(id);
      },
      destroy: function(id){
        return content.destroy(id);
      },
      update: function(id, form){
        return content.update(id, form);
      }
    };
  });
