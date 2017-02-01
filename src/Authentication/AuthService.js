
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
    let _this = this
    return this.Member.signin(credentials, function (member) {
      _this.TokenService.setToken(member.token)
      _this.setMemberId(member._id)
      _this.$rootScope.member = member
      _this.$rootScope.loggedIn = true
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
