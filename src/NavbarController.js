
export default function NavbarController ($scope, $location, Auth) {
  $scope.logout = () => {
    Auth.logout()
    $location.path('/')
  }
}
