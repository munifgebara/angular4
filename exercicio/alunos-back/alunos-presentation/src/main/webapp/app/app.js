define(function(require) {
  'use strict';
  require('angular');
  require('angular-ui-router');
  require('angular-sanitize');
  require('ngImgCrop');
  require('moment');
  require('gumga-layout');
  require('gumga-login');
  require('notify');
  require('angular-bootstrap');


  require('gumga-rest-ng');
  require('gumga-controller-ng');
  require('gumga-alert-ng');
  require('gumga-web-storage-ng');
  require('gumga-many-to-one-ng');
  require('gumga-address-ng');
  require('gumga-translate-ng');
  require('gumga-mask-ng');
  require('gumga-upload-ng');
  require('gumga-custom-fields-ng');
  require('gumga-form-buttons-ng');
  require('gumga-counter');
  require('gumga-breadcrumb');
  require('gumga-confirm');
  require('gumga-one-to-many-ng');
  require('gumga-populate-ng');
  require('gumga-many-to-many-ng');
  require('gumga-form-ng');
  require('gumga-query-filter-ng');
  require('gumga-generic-filter-ng');
  require('gumga-list-ng');
  require('gumga-date-ng');
  require('gumga-query-action-ng');

  require('app/apiLocations');
  require('app/modules/login/module');
  require('app/modules/common/module');
  require('app/modules/gumgatagdefinition/module');
  require('app/modules/gumgacustomfield/module');
  require('app/modules/welcome/module');
  //FIMREQUIRE

  angular.module('gumga.core', [
        'gumga.rest',
        'gumga.controller',
        'gumga.alert',
        'gumga.webstorage',
        'gumga.manytoone',
        'gumga.address',
        'gumga.translate',
        'gumga.mask',
        'gumga.upload',
        'gumga.customfields',
        'gumga.formbuttons',
        'gumga.counter',
        'gumga.breadcrumb',
        'gumga.confirm',
        'gumga.onetomany',
        'gumga.populate',
        'gumga.manytomany',
        'gumga.form',
        'gumga.queryfilter',
        'gumga.genericfilter',
        'gumga.list',
        'gumga.login',
        'gumga.layout',
        'gumga.date',
        'gumga.queryaction'
    ]);

  angular.module('app.core', [
    'ui.router'
    ,'ngSanitize'
    ,'ui.bootstrap'
    ,'gumga.core'
    ,'app.login'
    ,'app.base'
    ,'app.gumgatagdefinition'
    ,'app.gumgacustomfield'
    ,'app.welcome'
  //FIMINJECTIONS
    ])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $injector) {

    var template = [
        '<gumga-nav></gumga-nav>',
        '<gumga-menu menu-url="gumga-menu.json" keys-url="keys.json" image="./resources/images/gumga.png"></gumga-menu>',
        'oi<div class="gumga-container">',
        '<gumga-multi-entity-search data="multi.search"></gumga-multi-entity-search>',
        '</div>'
      ];

      var tempĺateBase = 'app/modules/common/views/base.html';
      $urlRouterProvider.otherwise('app/login');
      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          data: {
            id: 0
          },
          template: '<div ui-view></div>'
        })
        .state('welcome', {
          url: '/welcome',
          data: {
            id: 0
          },
          templateUrl: tempĺateBase
        })
        .state('multientity', {
          url: '/multientity/:search',
          template: template.join('\n'),
          controller: 'MultiEntityController',
          controllerAs: 'multi',
          data: {
            id: 0
          },
          resolve: {
            SearchPromise: ['$stateParams', '$http', function($stateParams, $http) {
              var url = APILocations.apiLocation + '/public/multisearch/search/';
              return $http.get(url + $stateParams.search);
            }]
          }
        })
        .state('gumgatagdefinition', {
             url: '/gumgatagdefinition',
             templateUrl: tempĺateBase
        })
        .state('gumgacustomfield', {
             url: '/gumgacustomfield',
             templateUrl: tempĺateBase
        })
        //FIMROUTE


        $httpProvider.interceptors.push(function ($q, $injector, $timeout, $filter) {
            return {
                'request': function (config) {
                    config.headers['gumgaToken'] = window.sessionStorage.getItem('user') ? JSON.parse(window.sessionStorage.getItem('user')).token : 0
                    return config
                },
                'responseError': function (rejection) {
                    var $state = $injector.get('$state')
                    var GumgaAlert = $injector.get('GumgaAlert')
                    var error = {
                        title: rejection.data.response || rejection.data.code,
                        message: rejection.data.response ? rejection.statusText : rejection.data.details,
                        errorCode: (rejection.data.data) ? rejection.data.data.ErrorCode : null
                    }
                    if (error.title === 'NO_USER' || error.title === 'BAD_PASSWORD') {
                        error.message = 'Usuario ou senha está incorreto!'
                    }
                    if (error.title === 'OPERATION_NOT_ALLOWED') {
                        error.message = rejection.data.operation
                    }
                    if (error.title === 'ConstraintViolation') {
                        error.message = 'Estes dados não podem ser deletados, pois estão sendo utilizado por outros registros.'
                    }
                    GumgaAlert.createDangerMessage($filter('gumgaTranslate')(error.title, 'exception'), error.message)
                    rejection.status === 403 && ($state.go('login.log'))
                    return $q.reject(rejection)
                }
            }
        })
    })
});
