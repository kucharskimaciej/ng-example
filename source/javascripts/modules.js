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