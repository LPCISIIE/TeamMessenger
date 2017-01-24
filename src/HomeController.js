import { app } from './app'

app.controller('HomeCtrl', ['$scope', 'Auth', function ($scope, Auth) {
  $scope.authenticated = () => Auth.check()
}])
