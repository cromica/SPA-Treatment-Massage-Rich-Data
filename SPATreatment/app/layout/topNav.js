(function () {
    'use strict';

    var controllerId = 'topNav';

    angular.module('app').controller(controllerId,
        ['$location', topNav]);

    function topNav($location) {
        var vm = this;
        
        vm.activate = activate;
        vm.title = 'topNav';
        vm.createEvent = createEvent;
        vm.eventName = undefined;

        function activate() { }

        function createEvent() {
            if (vm.eventName !== undefined) {
                $location.search('eventName', vm.eventName).path('createEvent');
                vm.eventName = '';
            }
        }
    }
})();
