var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('support', {
            url: '',
            abstract: true,
            templateUrl: 'layouts/layout.html'
        })
        .state('support.installations', {
            url: '',
            abstract: true,
            templateUrl: 'installations/layout.html',
            controller: 'InstallationsController as ctrl'
        })
        .state('support.installations.index', {
            url: '/',
            views: {
                'main': {
                    templateUrl: 'installations/index.html',
                    controller: 'InstallationsIndexController as ctrl'
                },
                'chart': {
                    templateUrl: 'installations/chart.html',
                    controller: 'InstallationsChartController as ctrl'
                }
            }
        })
        .state('support.logs', {
            url: '/logs',
            templateUrl: 'logs/index.html',
            controller: 'LogsIndexController as ctrl'
        })
        .state('404', {
            templateUrl: 'errors/404.html',
            controller: 'ErrorController as ctrl',
            data: {
                error: '404'
            }
        });

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise(function ($injector) {
       $injector.invoke(function ($state) {
         $state.go('404');
       });
    });
});