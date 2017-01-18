import app from '../app'

app.service('TokenService', [function () {
  this.setToken = function (token) {
    window.localStorage.setItem('token', token)
  }

  this.getToken = function () {
    return window.localStorage.getItem('token')
  }

  this.removeToken = function () {
    window.localStorage.removeItem('token')
  }
}])
