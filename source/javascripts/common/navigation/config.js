angular.module('common.navigation')
    .run(function ($rootScope) {
        $rootScope.mainNavigationItems = [
            {
                name: 'Installations',
                sref: 'support.installations.index'
            },
            {
                name: 'Logs',
                sref: 'support.logs'
            }
        ];
    });