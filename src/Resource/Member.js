import app from '../app'

app.factory('Member', ['$resource', 'api', function ($resource, api) {
  return $resource(api.url + '/members/:id', {id: '@_id'}, {
    get: {url: api.url + '/members/:id/signedin'},
    update: {method: 'PUT'},
    signin: {method: 'POST', url: api.url + '/members/signin'},
    signout: {method: 'DELETE', url: api.url + '/members/signout'}
  })
}])
