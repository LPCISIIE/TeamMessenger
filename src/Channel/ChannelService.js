import app from '../app'

app.factory('Channel', ['$rootScope', 'TokenService', 'Channel', function ($rootScope, TokenService, Channel) {
  return {
    create: function(channel) {
      return Channel.save(channel).$promise
    }
  }
}])
