
export default function Member ($resource, api) {
  return $resource(api.url + '/members/:id', { id: '@_id' }, {
    get: {
      url: api.url + '/members/:id/signedin'
    },
    signin: {
      method: 'POST',
      url: api.url + '/members/signin'
    },
    signout: {
      method: 'DELETE',
      url: api.url + '/members/signout'
    },
    update: { method: 'PUT' }
  })
}

Member.$inject = ['$resource', 'api']
