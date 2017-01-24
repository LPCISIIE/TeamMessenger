import app from '../app'

app.controller('LoginCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
  if (Auth.check()) {
    $location.path('/')
  }

  $scope.member = {}

  $scope.login = function () {
    Auth.login($scope.member).then(function (response) {
      $location.path('/')
    }, function (response) {
      $scope.error = response.data.error
    })
  }
}])
