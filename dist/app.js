angular.module('templates', []);
angular.module('installations.index', []);
angular.module('common.navigation', []);

angular.module('installations', ['installations.index']);
angular.module('logs', [])

angular.module('app', [
    'templates',
    'highcharts-ng',
    'common.navigation',
    'installations',
    'logs',
    'ui.router',
    "kendo.directives"
]);

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
            templateUrl: 'installations/layout.html'
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
            url: '/4oh4',
            templateUrl: 'errors/404.html',
            controller: 'ErrorController',
            data: {
                error: '404'
            }
        });

    $urlRouterProvider.otherwise('/');
});
angular.module('installations')
    .controller('ErrorController', function ErrorController ($scope) {
        var vm = this;


    });
angular.module('installations')
    .controller('InstallationsChartController', function InstallationsChartController ($scope) {
        var vm = this;


    });
angular.module('installations')
    .controller('InstallationsIndexController', function InstallationsIndexController ($scope, MainGrid) {
        var vm = this;

        vm.mainGridOptions = MainGrid.getOptions();
    });
angular.module('installations.index')
    .service('MainGrid', function () {
        var options;

        options = {
            dataSource: {
                type: "odata",
                transport: {
                    read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                },
                pageSize: 15,
                group: { field: "ContactTitle" }
            },
            height: 500,
            groupable: true,
            sortable: true,
            selectable: "multiple",
            reorderable: true,
            resizable: true,
            filterable: true,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: [
                {
                    field: "ContactName",
                    template: "<div class='customer-photo' style='background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${data.CustomerID}.jpg);'></div><div class='customer-name'>#: ContactName #</div>",
                    title: "Contact",
                    width: 200
                },{
                    field: "ContactTitle",
                    title: "Contact Title",
                    width: 220
                },{
                    field: "Phone",
                    title: "Phone",
                    width: 140
                },{
                    field: "CompanyName",
                    title: "Company Name"
                },{
                    field: "City",
                    title: "City",
                    width: 120
                }
            ]
        };


        this.getOptions = function () {
            return options;
        }
    })
angular.module('logs')
    .controller('LogsIndexController', function LogsIndexController ($scope) {
        var vm = this;


    });
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
angular.module('common.navigation')
    .directive('navbar', function() {
        return {
          scope: {
            items: '='
          },
          restrict: 'E',
          replace: true,
          templateUrl: 'common/navigation/navbar.html'
        };
    });