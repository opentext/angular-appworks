(function (angular, window, document, undefined) {
    'use strict';

    angular
        .module('angular-appworks')
        .factory('$auth', authService);

    function authService($appworks, $q) {

        var authObject = {},
            authPromise;

        function getAuth() {
            return authObject;
        }

        function getCSToken() {
            return authObject.cstoken;
        }

        function getGatewayUrl() {
            return window.gatewayUrl;
        }

        function onReauth(data) {
            authObject = data.data.authResponse;
            authPromise.resolve(data.data);
            console.info('Authentication succeeded', data.data);
            document.removeEventListener('appworksjs.auth', onReauth);
        }

        function reauth() {
            authPromise = $q.defer();
            document.addEventListener('appworksjs.auth', onReauth);
            console.info('Attempting re-authentication...');
            $appworks.auth.authenticate();
            return authPromise.promise;
        }

        return {
            getCSToken: getCSToken,
            reauth: reauth,
            gatewayUrl: getGatewayUrl,
            getAuth: getAuth
        };
    }

})(window.angular, window, document);