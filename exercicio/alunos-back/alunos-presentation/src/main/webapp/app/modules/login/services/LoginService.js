define(['app/apiLocations'], function (APILocation) {
    'use strict';

    function LoginService($http) {
        var publicApi = APILocation.apiLocation + '/public/token'

        this.loginGumga = function (user) {
            return $http.get(publicApi + '/create/' + user.email + '/' + user.senha);
        }

        this.setRedirectLogin = function (organization, presentationUrl) {
            LoginService.redirect = {organization: organization, presentationUrl: presentationUrl};
        }

        this.getRedirectLogin = function () {
            return LoginService.redirect || undefined;
        }

        this.removeRedirectLogin = function () {
            delete LoginService.redirect;
            LoginService.redirect = undefined;
        }

        this.setUserSession = function (user) {
            sessionStorage.setItem('gumgaToken', user.token);
            sessionStorage.setItem('user', JSON.stringify(user));
        }

        this.removeUserSession = function (user) {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('gumgaToken');
        }

        this.listOrganizations = function (token) {
            return $http.get(publicApi + '/organizations/' + token + '/');
        }

        this.changeOrganization = function (token, organizationId) {
            return $http.get(publicApi + '/changeorganization/' + token + '/' + organizationId);
        }

        this.createTokenWithFacebook = function (email, token) {
            return $http.get(APILocation.apiLocation + '/public/token/facebook?email='+email+'&token='+token)
        }

        this.createTokenWithGooglePlus = function (email, token) {
            return $http.get(APILocation.apiLocation + '/public/token/google-plus?email='+email+'&token='+token)
        }

        this.getSecurityUserData = function () {
            return $http.get(APILocation.apiLocation + '/api/userdata/check');
        }

        this.updateSecurityUserData = function (gumgaUserData) {
            return $http.post(APILocation.apiLocation + '/api/userdata/updateValue', gumgaUserData);
        }

    }

    LoginService.$inject = ['$http'];

    return LoginService;
})