(function () {
    'use strict';

    var controllerId = 'events';

    
    angular.module('app').controller(controllerId,
        ['common','datacontext', events]);

    function events(common,datacontext) {
        var vm = this;


        vm.activate = activate;
        vm.events = [];
        vm.title = 'Events';

        activate();

        function activate() {
            var promises = [getEvents()];
            common.activateController(promises, controllerId).then(function () {
                
                //perform some actions after the controller was activated like logging
            });

        }
        
        function getEvents() {
            return datacontext.getEvents()            .then(function (data) {
                vm.events = data;
            });
        }
        
        //function getEvents() {
        //    vm.events = datacontext.getEvents();
        //}
       
    }
})();
