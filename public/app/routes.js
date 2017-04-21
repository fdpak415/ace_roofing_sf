angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'app/views/pages/home.html'
  })

  .when('/projects', {
    templateUrl: 'app/views/pages/projects.html'
  })

  .when('/services', {
    templateUrl: 'app/views/pages/services.html',
    controller: 'regCtrl',
    controllerAs: 'register'
  })

  .when('/about', {
    templateUrl: 'app/views/pages/about.html'
  })

  .otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
