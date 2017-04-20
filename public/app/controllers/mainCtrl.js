angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location) {
  var app = this;

  if (Auth.isLoggedIn()) {
    console.log('Success: User is logged in')
  } else {
    console.log('Failure: User is Not logged in')
  };

  this.doLogin = function(loginData) {
    app.loading = true;
    app.errorMsg = false;

    Auth.login(app.loginData).then(function(data) {

      if (data.data.success) {
        app.loading = false;
        app.successMsg = data.data.message + '...redirecting';
        $timeout(function() {
          $location.path('/about');
        }, 2000);

      } else {
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });
  };

  this.logout = function() {
    Auth.logout();
    $location.path('/logout');
    $timeout(function(){
      $location.path('/');
    }, 2000);
  };
});
