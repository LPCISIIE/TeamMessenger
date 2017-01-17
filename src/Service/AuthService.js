import app from '../app'

app.factory('Auth', ['$rootScope', 'TokenService', 'Member', function ($rootScope, TokenService, Member) {
  let auth = {
    check: function () {
      $rootScope.loggedIn = TokenService.getToken() != null
      return $rootScope.loggedIn
    },
    login: function (credentials) {
      let _this = this
      return Member.signin(credentials, function (member) {
        TokenService.setToken(member.token)
        _this.setMemberId(member._id)
        $rootScope.member = member
        $rootScope.loggedIn = true
      }).$promise
    },
    register: function (credentials) {
      return Member.save(credentials).$promise
    },
    logout: function () {
      // Member.signout(function () {
      TokenService.removeToken()
      $rootScope.member = {}
      $rootScope.loggedIn = false
      // });
    },
    setMemberId: function (id) {
      return window.localStorage.setItem('member_id', id)
    },
    getMemberId: function () {
      return window.localStorage.getItem('member_id')
    },
    getMember: function () {
      if (!this.check()) {
        return null
      }

      return Member.get({id: this.getMemberId()}).$promise
    }
  }

  if (auth.check()) {
    auth.getMember().then(function (member) {
      $rootScope.member = member
    })
  }

  return auth
}])
