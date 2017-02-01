import route from './routes'

export default function config ($httpProvider, $routeProvider, api) {
  $httpProvider.defaults.headers.common.Authorization = 'Token token=' + api.key

  $httpProvider.interceptors.push(['TokenService', function (TokenService) {
    return {
      request: (config) => {
        let token = TokenService.getToken()
        if (token != null) {
          config.url += ((config.url.indexOf('?') >= 0) ? '&' : '?') + 'token=' + token
        }
        return config
      }
    }
  }])

  route($routeProvider)
}

config.$inject = ['$httpProvider', '$routeProvider', 'api']
