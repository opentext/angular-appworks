(function (angular, window, document, undefined) {
    'use strict';

    angular
        .module('angular-appworks')
        .factory('$auth', ['$appworks', '$q', '$timeout', authService]);

    function authService($appworks, $q, $timeout) {

        var authObject = {},
            authPromise,
            authTimeout;

        function getAuth() {
            return authObject;
        }

        function getCSToken() {
            return authObject.cstoken;
        }

        function getOTDSTicket() {
            return authObject.otdsticket;
        }

        function getOTCSTicket() {
            return authObject.otcsticket;
        }

        function getGatewayUrl() {
            return window.gatewayUrl;
        }

        function onReauth(data) {
            authObject = data.data.authResponse;
            authPromise.resolve(data.data);
            console.info('Authentication succeeded', data.data);
            document.removeEventListener('appworksjs.auth', onReauth);
            $timeout.cancel(authTimeout);
        }

        function reauthTimeout() {
            var msg = 'Authentication timed out after 10 seconds';
            console.error(msg);
            authPromise.reject(msg);
            document.removeEventListener('appworksjs.auth', onReauth);
        }

        function reauth() {
            $timeout.cancel(authTimeout);
            authPromise = $q.defer();
            document.addEventListener('appworksjs.auth', onReauth);
            console.info('Attempting re-authentication...');
            $appworks.auth.authenticate();
            authTimeout = $timeout(reauthTimeout, 10000);
            return authPromise.promise;
        }

        return {
            getCSToken: getCSToken,
            getOTDSTicket: getOTDSTicket,
            getOTCSTicket: getOTCSTicket,
            reauth: reauth,
            gatewayUrl: getGatewayUrl,
            getAuth: getAuth
        };
    }

})(window.angular, window, document);