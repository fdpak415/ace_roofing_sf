angular.module('userApp', ['duScroll'])
  // .controller('ScrollController', function($scope, $location, $anchorScroll) {
  //     $scope.scrollTo = function(scrollLocation) {
  //       $location.hash(scrollLocation);
  //       $anchorScroll.yOffset = 20;
  //       $anchorScroll();
  //     };
  //   });

    .controller('ScrollController', function($scope, $document, $location){
      var section = angular.element(document.getElementById($location));
      $scope.scrollTo = function(scrollLocation) {
        $document.scrollToElementAnimated(section);
      }
    }
  ).value('duScrollOffset', 30);
