import angular from 'angular'
import 'angular-resource'
import 'angular-route'

let app = angular.module('coop', ['ngResource', 'ngRoute'])

app.constant('api', {
  'key': '9fb1719917e849c1972265af1e7cc437',
  'url': 'http://coop.api.netlor.fr/api'
})

export default app
