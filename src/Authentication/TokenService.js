import app from '../app'

app.service('TokenService', [function () {
  this.setToken = (token) => {
    window.localStorage.setItem('token', token)
  }

  this.getToken = () => {
    return window.localStorage.getItem('token')
  }

  this.removeToken = () => {
    window.localStorage.removeItem('token')
  }
}])
