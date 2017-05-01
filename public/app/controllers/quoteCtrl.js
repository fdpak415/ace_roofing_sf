angular.module('quoteControllers', [])

.controller('quoteCtrl', ['$scope', function($scope, $http) {
  $scope.regQuote = function(regData) {
    console.log('form submitted');
    console.log(this.regData);
    $http.post('/api/quotes', this.regData);
  }
}]);
