angular.module('quoteServices', [])

.factory('Quote', function() {
  quoteFactory = {};

  quoteFactory.create = function() {
    return $http.post('/api/quotes', regData);
  }

  return quoteFactory;
});


// myApp.factory('factoryname', function(){
// return{
//     insertData: function($scope,$http){
//         var json_data = JSON.stringify($scope.formData);
//
//
//         $http.post(url, json_data, {
//             withCredentials: true,
//             headers: {'Content-Type': 'application/json'},
//             transformRequest: angular.identity
//         }).success(function(){
//             console.log("done");
//         }).error(function(){
//             console.log("error");
//         });
//     }
// }
// });
