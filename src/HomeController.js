
export default function HomeController ($scope, Auth) {
  $scope.authenticated = () => Auth.check()
}

HomeController.$inject = ['$scope', 'Auth']
