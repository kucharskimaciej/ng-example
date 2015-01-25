angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('errors/404.html',
    '<h1>Error {{ ctrl.errorCode }}</h1>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('installations/chart.html',
    '<h1>Chart!</h1>\n' +
    '\n' +
    '<highchart id="chart1" config="ctrl.chartOptions"></highchart>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('installations/index.html',
    '<kendo-grid options="ctrl.mainGridOptions"></kendo-grid>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('installations/layout.html',
    '<div class="row">\n' +
    '    <div class="col-lg-4">\n' +
    '        <h1>Hello</h1>\n' +
    '        <p>Some not-so-dynamic content.</p>\n' +
    '    </div>\n' +
    '    <section ui-view="chart" class="col-lg-8"></section>\n' +
    '    <section ui-view="main" class="col-lg-12"></section>\n' +
    '</div>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/layout.html',
    '<aside>\n' +
    '    <navbar items="::mainNavigationItems"></navbar>\n' +
    '</aside>\n' +
    '<section ui-view></section>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('common/navigation/item.html',
    '<a ui-sref="{{ state }}" title="{{ title }}" ui-sref-active="active">\n' +
    '    {{ title }}\n' +
    '</a>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('common/navigation/navbar.html',
    '<nav class="Navigation">\n' +
    '    <navigation-item class="Navigation-item"\n' +
    '             ng-repeat="item in ::items track by $id(item)"\n' +
    '             title="{{ item.name }}"\n' +
    '             state="{{ item.sref }}"\n' +
    '            />\n' +
    '</nav>\n' +
    '');
}]);
