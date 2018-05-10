// Copyright 2015-2016 Open Text
//
// Licensed under the Apache License, Version 2.0 (the "License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

        function getOTDSTicket() {
            return authObject.otdsticket;
        }

        function getOTCSTicket() {
            if (authObject.addtl && authObject.addtl.contentServerConnector) {
                return authObject.addtl.contentServerConnector.otcsticket;
            }
            return '';
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
            getOTDSTicket: getOTDSTicket,
            getOTCSTicket: getOTCSTicket,
            reauth: reauth,
            gatewayUrl: getGatewayUrl,
            getAuth: getAuth
        };
    }

})(window.angular, window, document);