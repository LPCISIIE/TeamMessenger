
export default function HomeController ($scope, Auth) {
  $scope.authenticated = () => Auth.check()
}
