angular.module('installations')
    .controller('InstallationsChartController', function InstallationsChartController (ChartOptions) {
        var vm = this;

        ChartOptions.get().then(function (options) {
            vm.chartOptions = options;
        });

    });