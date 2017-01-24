import app from '../app'

app.controller('RegisterCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
  if (Auth.check()) {
    $location.path('/')
  }

  $scope.member = {}

  $scope.register = function () {
    Auth.register($scope.member).then(function (response) {
      $location.path('/login')
    }, function (response) {
      $scope.error = response.data.error instanceof Array ? response.data.error[0][0] : response.data.error
    })
  }
}])
