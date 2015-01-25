angular.module('installations')
    .controller('ErrorController', function ErrorController ($state) {
        var vm = this;
        vm.errorCode = $state.current.data.error;

    });