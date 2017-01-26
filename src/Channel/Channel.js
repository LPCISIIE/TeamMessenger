
export default function Channel ($resource, api) {
  return $resource(api.url + '/channels/:id', {id: '@_id'}, {
    update: {method: 'PUT'}
  })
}
