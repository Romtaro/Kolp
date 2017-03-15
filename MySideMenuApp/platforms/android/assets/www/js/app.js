// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.pageVoteDiffuseur2', {
    url: '/pageVoteDiffuseur2',
    views: {
      'menuContent': {
        templateUrl: 'templates/pageVoteDiffuseur2.html'
      }
    }
  })

  .state('app.youtubePageTest', {
    url: '/youtubePageTest',
    views: {
      'menuContent': {
        templateUrl: 'templates/youtubePageTest.html'
      }
    }
  })

  .state('app.pageGeolo3', {
      url: '/pageGeolo3',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageGeolo3.html'
        }
      }
    })
    .state('app.pagePlaylistEnCour4', {
      url: '/pagePlaylistEnCour4',
      views: {
        'menuContent': {
          templateUrl: 'templates/pagePlaylistEnCour4.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.pageRechercheAjout5', {
    url: '/pageRechercheAjout5',
    views: {
      'menuContent': {
        templateUrl: 'templates/pageRechercheAjout5.html',
        controller: 'PlaylistCtrl'

      }
    }
  })

    .state('app.pageMesPlaylist6', {
      url: '/pageMesPlaylist6',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageMesPlaylist6.html'
        }
      }
    })


      .state('app.pageCreerPlaylist7', {
        url: '/pageCreerPlaylist7',
        views: {
          'menuContent': {
            templateUrl: 'templates/pageCreerPlaylist7.html'
          }
        }
      })

    .state('app.pageMonCompte8', {
      url: '/pageMonCompte8',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageMonCompte8.html'
        }
      }
    })



    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/pageVoteDiffuseur2');
});
