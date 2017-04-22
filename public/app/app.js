angular.module('userApp', [])
  .controller('ScrollController', function($scope, $location, $anchorScroll) {
      $scope.scrollTo = function(scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 20;
        $anchorScroll();
        $location.hash(old)
      };
    });
