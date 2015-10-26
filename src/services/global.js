(function (angular, window, document, undefined) {

    // wrapper around global appworks object
    angular
        .module('angular-appworks')
        .service('$appworks', ['$window', bindGlobalAppworksObject]);

    function bindGlobalAppworksObject($window) {
        if ($window.appworks) {
            return $window.appworks;
        }
        return {};
    }

})(window.angular, window, document);