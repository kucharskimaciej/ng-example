angular.module('installations')
    .controller('InstallationsIndexController', function InstallationsIndexController ($scope, MainGrid) {
        var vm = this;

        vm.mainGridOptions = MainGrid.getOptions();
    });