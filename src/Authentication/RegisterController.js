
export default function RegisterController ($scope, $location, Auth) {
  if (Auth.check()) {
    $location.path('/')
  }

  $scope.member = {}

  $scope.register = () => {
    Auth.register($scope.member).then((response) => {
      $location.path('/login')
    }, (response) => {
      $scope.error = response.data.error instanceof Array ? response.data.error[0][0] : response.data.error
    })
  }
}

RegisterController.$inject = ['$scope', '$location', 'Auth']
