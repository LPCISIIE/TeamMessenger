import app from '../app'

app.directive('post', [function () {
  return {
    restrict: 'E',
    templateUrl: 'partials/post/post-directive.html',
    scope: {
      post: '='
    },
    link: function ($scope, element, attrs) {
      let names = [
        'matt',
        'elliot',
        'jenny',
        'joe',
        'stevie',
        'steve',
        'christian',
        'helen',
        'justen',
        'laura'
      ]

      $scope.name = names[Math.floor(Math.random() * names.length)]
    }
  }
}])
