
export default function LoginController ($scope, $location, Auth) {
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
}

LoginController.$inject = ['$scope', '$location', 'Auth']
