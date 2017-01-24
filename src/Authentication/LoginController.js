import { app } from '../app'

app.controller('LoginCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
  if (Auth.check()) {
    $location.path('/')
  }

  $scope.member = {}

  $scope.login = () => {
    Auth.login($scope.member).then((response) => {
      $location.path('/')
    }, (response) => {
      $scope.error = response.data.error
    })
  }
}])
