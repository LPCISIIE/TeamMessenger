import app from '../app'

app.factory('Channel', ['$resource', 'api', function ($resource, api) {
  return $resource(api.url + '/channels/:id', {id: '@_id'}, {
    getAll: {isArray: true},
    update: {method: 'PUT'}
  })
}])
