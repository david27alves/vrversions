var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{

   $routeProvider.when('/', {
      "templateUrl" : "app/views/home.html"
   }).when('/cadastro', {
		"templateUrl": "app/views/cadastro.html"
	})

});
