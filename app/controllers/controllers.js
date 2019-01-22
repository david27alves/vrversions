app.controller('mlabCtrl', ['$scope', '$http', function($scope, $http)
{
   var $scope.versoes;
   var baseurl = 'https://api.mlab.com/api/1/databases/vrversions/collections/versions?apiKey=gkPeeEULfjRhBbL51CSPsI80eW9dMOtZ';
   
   $http.get(baseurl).then(function(response) {
      $scope.versoes = response.data;
   }, function(err) {
      console.log(err);
   }); 
}]);
