import app from '../app'

app.controller('AuthCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
  if (Auth.check()) {
    $location.path('/')
  }

  $scope.member = {}
  $scope.newMember = {}

  $scope.login = function () {
    Auth.login($scope.member).then(function (response) {
      $location.path('/')
    }, function (response) {
      $scope.error = response.data.error
    })
  }

  $scope.register = function () {
    Auth.register($scope.newMember).then(function (response) {
      $location.path('/login')
    }, function (response) {
      $scope.error = response.data.error instanceof Array ? response.data.error[0][0] : response.data.error
    })
  }
}])
