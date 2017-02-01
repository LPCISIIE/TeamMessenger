
export default function AuthService ($rootScope, $window, TokenService, Member) {
  let auth = {
    check () {
      $rootScope.loggedIn = TokenService.getToken() != null
      return $rootScope.loggedIn
    },

    login (credentials) {
      let _this = this
      return Member.signin(credentials, function (member) {
        TokenService.setToken(member.token)
        _this.setMemberId(member._id)
        $rootScope.member = member
        $rootScope.loggedIn = true
      }).$promise
    },

    register (credentials) {
      return Member.save(credentials).$promise
    },

    logout () {
      Member.signout()
      TokenService.removeToken()
      $rootScope.member = {}
      $rootScope.loggedIn = false
    },

    setMemberId (id) {
      return $window.localStorage.setItem('member_id', id)
    },

    getMemberId () {
      return $window.localStorage.getItem('member_id')
    },

    getMember () {
      if (!this.check()) {
        return null
      }

      return Member.get({ id: this.getMemberId() }).$promise
    }
  }

  if (auth.check()) {
    auth.getMember().then((member) => {
      $rootScope.member = member
    })
  }

  return auth
}
