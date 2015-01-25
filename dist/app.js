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
angular.module('installations')
    .controller('ErrorController', function ErrorController ($state) {
        var vm = this;
        vm.errorCode = $state.current.data.error;

    });
angular.module('installations')
    .controller('InstallationsChartController', function InstallationsChartController (ChartOptions) {
        var vm = this;

        ChartOptions.get().then(function (options) {
            vm.chartOptions = options;
        });

    });
angular.module('installations')
    .service('ChartOptions', function ($q) {
       var chartOptions = {
           title: {
               text: 'Monthly Average Temperature',
               x: -20 //center
           },
           subtitle: {
               text: 'Source: WorldClimate.com',
               x: -20
           },
           xAxis: {
               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
           },
           yAxis: {
               title: {
                   text: 'Temperature (°C)'
               },
               plotLines: [{
                   value: 0,
                   width: 1,
                   color: '#808080'
               }]
           },
           tooltip: {
               valueSuffix: '°C'
           },
           legend: {
               layout: 'vertical',
               align: 'right',
               verticalAlign: 'middle',
               borderWidth: 0
           },
           series: [{
               name: 'Tokyo',
               data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
           }, {
               name: 'New York',
               data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
           }, {
               name: 'Berlin',
               data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
           }, {
               name: 'London',
               data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
           }]
       };

        this.get = function () {
            var deferred = $q.defer();

            window.setTimeout(function () {
                deferred.resolve(chartOptions);
            }, 1500);

            return deferred.promise;
        };
    });
angular.module('installations')
    .controller('InstallationsIndexController', function InstallationsIndexController ($scope, MainGrid) {
        var vm = this;

        vm.mainGridOptions = MainGrid.getOptions();
    });
angular.module('installations')
    .controller('InstallationsController', function InstallationsController () {
        var vm = this;

        var templates = [
            { name: 'partial1', url: '/installations/partial1.html'},
            { name: 'partial2', url: '/installations/partial2.html'}
        ];

        vm.templates = templates;
        vm.template = null;

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
    .controller('LogsIndexController', function LogsIndexController (Logs) {
        var vm = this;
        Logs.get().then(function (res) {
            console.log(res);
            vm.logs = res.data;
        });


    });
angular.module('logs')
    .factory('Logs', function ($http) {
        var url = 'http://www.json-generator.com/api/json/get/cunoibSgQy?indent=2';


        return {
            get: function () {
                return $http.get(url);
            }
        }

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