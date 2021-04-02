import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bing(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'dev-djvue-55.us.auth0.com',
    clientID: 'RVPGIKjs5yNX8pdALOBnyuj244iB5DoU',
    redirectUri: 'http://localhost:8080/',
    audience: '',
    responseType: 'token id_token',
    scope: 'openid profile',
  })

}
