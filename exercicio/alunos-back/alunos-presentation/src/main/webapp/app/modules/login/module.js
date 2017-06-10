define(function (require) {
    'use strict';
    require('angular');

    function LoginConfiguration($stateProvider) {
        $stateProvider
            .state('app.login', {
                url: '/login',
                templateUrl: 'app/modules/login/views/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                onEnter: ['$state', function($state) {
                    var user = JSON.parse(sessionStorage.getItem('user')) || undefined;
                    if (user) {
                        $state.go('welcome.home');
                    }
                }]
            });
    }
    LoginConfiguration.$inject = ['$stateProvider'];

    return angular
        .module('app.login', [])
        .controller('LoginController', require('./controllers/LoginController'))
        .service('LoginService', require('./services/LoginService'))
        .config(LoginConfiguration)

});