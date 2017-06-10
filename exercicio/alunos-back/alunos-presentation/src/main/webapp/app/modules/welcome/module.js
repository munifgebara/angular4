
define(function (require) {
    'use strict';

    require('angular');
    require('angular-ui-router');

    function WelcomeConfiguration($stateProvider) {
        $stateProvider
            .state('welcome.home', {
                url: '/home',
                templateUrl: 'app/modules/welcome/views/welcome.html'
            });
    }
    WelcomeConfiguration.$inject = ['$stateProvider'];

    return angular.module('app.welcome', ['ui.router']).config(WelcomeConfiguration);
});
