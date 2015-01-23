angular.module('common.navigation')
    .directive('navigationItem', function () {
        return {
            scope: {
                title: '@',
                state: '@'
            },
            restrict: 'E',
            replace: true,
            require: '^navbar',
            templateUrl: 'common/navigation/item.html'
        }
    })