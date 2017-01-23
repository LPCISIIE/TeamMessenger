import app from '../app'

app.factory('Post', ['$resource', 'api', function ($resource, api) {
  return $resource(api.url + '/channels/:channel_id/posts/:post_id', {
    channel_id: '@channel_id',
    post_id: '@post_id'
  }, {
    update: {method: 'PUT'}
  })
}])
