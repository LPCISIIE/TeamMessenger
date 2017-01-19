import app from './app'

app.controller('NavbarCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
  $scope.logout = function () {
    Auth.logout()
    $location.path('/')
  }
}])
