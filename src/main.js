import './assets/scss/app.scss'

import angular from 'angular'
import resource from 'angular-resource'
import router from 'angular-route'

import config from './config'

import TokenService from './Authentication/TokenService'
import AuthService from './Authentication/AuthService'

import Member from './User/Member'
import Channel from './Channel/Channel'
import Post from './Post/Post'

import NavbarController from './NavbarController'
import HomeController from './HomeController'
import LoginController from './Authentication/LoginController'
import RegisterController from './Authentication/RegisterController'
import ChannelCreationController from './Channel/ChannelCreationController'
import ChannelViewController from './Channel/ChannelViewController'
import ChannelSidebarDirective from './Channel/ChannelSidebarDirective'
import PostFormDirective from './Post/PostFormDirective'
import PostsDirective from './Post/PostsDirective'

export let $ = angular.element
export default angular.module('coop', [resource, router])
  .constant('api', {
    'key': '9fb1719917e849c1972265af1e7cc437',
    'url': 'http://coop.api.netlor.fr/api'
  })
  .service('TokenService', TokenService)
  .config(config)
  .factory('Member', Member)
  .service('Auth', AuthService)
  .factory('Channel', Channel)
  .factory('Post', Post)
  .directive('channelSidebar', ChannelSidebarDirective)
  .directive('postForm', PostFormDirective)
  .directive('posts', PostsDirective)
  .controller('NavbarCtrl', NavbarController)
  .controller('HomeCtrl', HomeController)
  .controller('LoginCtrl', LoginController)
  .controller('RegisterCtrl', RegisterController)
  .controller('ChannelCreationCtrl', ChannelCreationController)
  .controller('ChannelViewCtrl', ChannelViewController)
