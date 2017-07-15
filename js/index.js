var myApp = angular.module('myApp', ["ngRoute"]);

  myApp.controller('mainCTRL', ['$scope', function($scope) {
    
    $scope.name = "elad";
    $scope.apprtments = [
        {title: "ben gurion 81"}
    ]  
      
  }]);


myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "allapt.html"
    })
    .when("/apt", {
        templateUrl : "apt.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/booking", {
        templateUrl : "booking.html"
    });
});


