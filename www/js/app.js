// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
    $http.get('js/vegetables.json').success(function(data) {
      $scope.vlist = data;

      $scope.doRefresh =function() {
      $http.get('js/vegetables2.json').success(function(data) {
          $scope.vlist = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }
      
      
    });

    $http.get('js/forex.json').success(function(data) {
      $scope.flist = data;

      $scope.doRefresh =function() {
      $http.get('js/vegetables2.json').success(function(data) {
          $scope.flist = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }
      
      
    });

    $http.get('js/petrol.json').success(function(data) {
      $scope.plist = data;

      $scope.doRefresh =function() {
      $http.get('js/vegetables2.json').success(function(data) {
          $scope.flist = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }
      
      
    });

        $http.get('js/gold.json').success(function(data) {
      $scope.glist = data;

      $scope.doRefresh =function() {
      $http.get('js/vegetables2.json').success(function(data) {
          $scope.flist = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }
      
      
    });

    
}]);


