define(['app/apiLocations'], function (APILocation) {
    'use strict';

    function LoginController(LoginService, $state, $scope, $timeout) {
        var vm = this;

        vm.loginGumga = function (login) {
            LoginService.loginGumga(login)
                .then(function (response) {
                    $state.go('welcome.home');
                }, function (error) {
                    // console.error(error);
                })
        }

        vm.loginFacebook = function (login) {
            LoginService.createTokenWithFacebook(login.user.email, login.authResponse.accessToken)
                .then(function (tokenSecurity) {
                    if (!tokenSecurity.data.response) {
                        $state.go('welcome.home');
                    } else {
                        showMessagesFacebook(tokenSecurity.data.response)
                    }
                })
        }

        function showMessagesFacebook(response) {
            showMessages(response)
            if (response == 'NO_USER') {
                sweetAlert("Usuário não existe", "O usuário do facebook parece não ter cadastro no sistema, crie uma conta e tente novamente.", "warning");
            }
        }

        function showMessagesGooglePlus(response) {
            showMessages(response)
            if (response == 'NO_USER') {
                sweetAlert("Usuário não existe", "O usuário do google plus parece não ter cadastro no sistema, crie uma conta e tente novamente.", "warning");
            }
        }

        function showMessages(response) {
            if (response == 'TOKEN_EXPIRED_OR_NOT_IS_VALID') {
                sweetAlert("Oops...", "Seu token está expirado ou não existe.", "error");
            }
            if (response == 'USER_NOT_ENTITLED_IN_TOKEN') {
                sweetAlert("Oops...", "Usuário informado não possui direito sobre o token.", "error");
            }
        }

        vm.loginGooglePlus = function (login) {
            LoginService.createTokenWithGooglePlus(login.user.email, login.authResponse.access_token)
                .then(function (tokenSecurity) {
                    if (!tokenSecurity.data.response) {
                        $state.go('welcome.home');
                    } else {
                        showMessagesGooglePlus(tokenSecurity.data.response)
                    }
                })
        }


        vm.configuration = {
            appURL : APILocation.apiLocation
        };

        vm.onLogin = function(user, organizations) {
            $state.go('welcome.home');
        }

    }

    LoginController.$inject = ['LoginService', '$state', '$scope', '$timeout'];

    return LoginController;
})