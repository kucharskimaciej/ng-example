angular.module('installations')
    .controller('InstallationsController', function InstallationsChartController () {
        var vm = this;

        var templates = [
            { name: 'partial1', url: '/installations/partial1.html'},
            { name: 'partial2', url: '/installations/partial2.html'}
        ];

        vm.templates = templates;
        vm.template = null;

    });