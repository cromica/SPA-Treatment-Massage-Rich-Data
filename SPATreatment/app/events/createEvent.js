(function () {
    'use strict';

    var controllerId = 'createEvent';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId,
        ['$location','$routeParams', 'datacontext', createEvent]);

    function createEvent($location,$routeParams, datacontext) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'createEvent';
        vm.eventDate = undefined;
        vm.totalNumberOfPlaces = undefined;
        vm.ocupiedPlaces = undefined;
        vm.addEvent = addEvent;

        var eventName = $routeParams.eventName;
        function activate() { }
        
        function addEvent() {
            if (vm.eventDate !== undefined && vm.totalNumberOfPlaces !== undefined && vm.ocupiedPlaces !== undefined) {
                datacontext.createEvent(eventName, eventName, vm.eventDate, vm.totalNumberOfPlaces, vm.ocupiedPlaces);
                datacontext.saveChanges();
                $location.path('/');
            }
        }
    }
})();
