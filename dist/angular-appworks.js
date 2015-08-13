angular.module('angular-appworks', []);

function appworks($window) {
    if ($window.appworks) {
        var $appworks = $window.appworks;
        delete($window.appworks);
        return $appworks;
    }
}

angular.module('angular-appworks').factory('$appworks', ['$window', appworks]);