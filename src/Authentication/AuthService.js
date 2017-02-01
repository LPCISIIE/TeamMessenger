
export default class AuthService {
  constructor ($rootScope, $window, TokenService, Member) {
    this.$rootScope = $rootScope
    this.$window = $window
    this.TokenService = TokenService
    this.Member = Member

    if (this.check()) {
      this.getMember().then((member) => {
        $rootScope.member = member
      })
    }
  }

  check () {
    this.$rootScope.loggedIn = this.TokenService.getToken() != null
    return this.$rootScope.loggedIn
  }

  login (credentials) {
    return this.Member.signin(credentials, (member) => {
      this.TokenService.setToken(member.token)
      this.setMemberId(member._id)
      this.$rootScope.member = member
      this.$rootScope.loggedIn = true
    }).$promise
  }

  register (credentials) {
    return this.Member.save(credentials).$promise
  }

  logout () {
    this.Member.signout()
    this.TokenService.removeToken()
    this.$rootScope.member = {}
    this.$rootScope.loggedIn = false
  }

  setMemberId (id) {
    return this.$window.localStorage.setItem('member_id', id)
  }

  getMemberId () {
    return this.$window.localStorage.getItem('member_id')
  }

  getMember () {
    if (!this.check()) {
      return null
    }

    return this.Member.get({ id: this.getMemberId() }).$promise
  }
}

AuthService.$inject = ['$rootScope', '$window', 'TokenService', 'Member']
