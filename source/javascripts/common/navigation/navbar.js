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