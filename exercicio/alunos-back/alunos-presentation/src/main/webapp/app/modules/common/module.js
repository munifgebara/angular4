define(function (require) {
    'use strict';
    require('angular');

    return angular
        .module('app.base', [])
        .controller('BaseController', require('./controllers/BaseController'))
        .service('BaseService', require('./services/BaseService'))

});