
export default function TokenService () {
  this.setToken = (token) => {
    window.localStorage.setItem('token_date', Date.now())
    window.localStorage.setItem('token', token)
  }

  this.getToken = () => {
    let date = window.localStorage.getItem('token_date')

    // On teste la validité du token
    // Si la dernière requête était il y a plus de 30 min (1800000 ms)
    // on supprime le token, sinon on actualise la date
    if (date && Date.now() - parseInt(date) > 1800000) {
      window.localStorage.removeItem('token')
    } else {
      window.localStorage.setItem('token_date', Date.now())
    }

    return window.localStorage.getItem('token')
  }

  this.removeToken = () => {
    window.localStorage.removeItem('token')
  }
}
