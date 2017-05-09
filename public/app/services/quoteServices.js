angular.module('quoteServices', [])

.factory('Quote', function() {
  quoteFactory = {};

  quoteFactory.create = function() {
    return $http.post('/api/quotes', regData);
  }

  return quoteFactory;
});
