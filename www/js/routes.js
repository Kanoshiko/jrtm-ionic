angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('jRTM', {
    url: '/home',
    templateUrl: 'templates/jRTM.html',
    controller: 'jRTMCtrl'
  })

  .state('tabsController.talents', {
    url: '/talents',
    views: {
      'tab1': {
        templateUrl: 'templates/talents.html',
        controller: 'talentsCtrl'
      }
    }
  })

  .state('tabsController.competences', {
    url: '/competences',
    views: {
      'tab2': {
        templateUrl: 'templates/competences.html',
        controller: 'competencesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sortileges', {
    url: '/sortileges',
    views: {
      'tab4': {
        templateUrl: 'templates/sortileges.html',
        controller: 'sortilegesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home')

  

});