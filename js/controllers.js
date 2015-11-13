'use strict';
var AsyncTest = angular.module('AsyncTest', ['ngRoute']);

AsyncTest.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
      .when('/detail',{
        templateUrl:'partials/detail.html',
        controller:'dataDetail'
 })
      .otherwise({
        redirectTo: '/'
      });
}]);

////////////////////////////////////////////////////////////////////////////////////////
AsyncTest.controller('setData', ['$scope', '$http', '$rootScope', '$timeout',
	function($scope,$http,$rootScope,$timeout) {
    var names;

     $http.get('info/names.json').success(function(data) {
      names = data;
      $rootScope.testVar1as=names;
      $rootScope.testVar1name=names[0]["name"];
          });
     var getTestVar2name = function() {
     $rootScope.testVar2name=names[1]["name"];
     if ($rootScope.testVar2name!=undefined){getTestVar2name={}}
    console.log("but after putting in timeout function=",$rootScope.testVar2name);
        $timeout(getTestVar2name, 500);
    }
     $timeout(getTestVar2name, 500);

  }]);
////////////////////////////////////////////////////////////////////////////////////////
AsyncTest.controller('dataDetail', ['$scope', '$rootScope','$http','$location', '$routeParams',

    function($scope,$rootScope,$http, $location, $routeParams) {
console.log('dataDetail');
console.log("name at first with asynchron loading=",$rootScope.testVar1name);
console.log("name at first with timeout=",$rootScope.testVar2name);
    }
]);

