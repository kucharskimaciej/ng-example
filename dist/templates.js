angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('errors/404.html',
    '');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('installations/chart.html',
    '<div>chart!</div>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('installations/index.html',
    '<kendo-grid options="ctrl.mainGridOptions"></kendo-grid>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('installations/layout.html',
    '<section ui-view="chart"></section>\n' +
    '<section ui-view="main"></section>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/layout.html',
    '<aside>\n' +
    '    <navbar items="::mainNavigationItems"></navbar>\n' +
    '</aside>\n' +
    '<section ui-view></section>');
}]);

angular.module('templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('logs/index.html',
    '<span>some html</span>');
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
