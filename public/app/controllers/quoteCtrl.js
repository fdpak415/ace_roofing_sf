angular.module('quoteControllers', [])

.controller('quoteCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.regQuote = function(regData) {
    console.log('form submitted');
    $http.post('/api/quote', this.regData)
    .success(() => {
      console.log('done');
      console.log(this.regData)
    }).error(() => {
      console.log('error');
    })
  }
}]);
