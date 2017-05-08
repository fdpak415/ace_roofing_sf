angular.module('quoteControllers', [])

.controller('quoteCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.regQuote = function(regData) {
    console.log('form submitted');
    $http.post('/api/quote', this.regData).then(function(data) {
      console.log(data)
    })
    .success(() => {
      console.log('done');
    }).error(() => {
      console.log('error');
    });
  }
}]);
