(function () {
    'use strict';

    var serviceId = 'datacontext';

    angular.module('app').factory(serviceId, ['common','entityManagerFactory','model', datacontext]);

    function datacontext(common, emFactory,model) {
        var manager = emFactory.newManager();
        var EntityQuery = breeze.EntityQuery;
        var $q = common.$q;

        // Define the functions and properties to reveal.
        var service = {
            
            getEvents: getEvents,
            createEvent: createEvent,
            saveChanges: saveChanges
        };

        return service;

        //function getEvents() {
        //    var events = [
        //        { id: "1", name: "CodeWars Cluj", description: "CodeWars Cluj", eventDate: "06/03/2014", totalNumberOfPlaces: "10", ocupiedPlaces: "4" },
        //        { id: "2", name: "Microsoft TechFest", description: "Microsoft TechFest", eventDate: "10/03/2014", totalNumberOfPlaces: "100", ocupiedPlaces: "40" },
        //        { id: "3", name: "InnovationLabs 2.0 - Tech-Talks: Leadership 101", description: "InnovationLabs 2.0 - Tech-Talks: Leadership 101", eventDate: "11/03/2014", totalNumberOfPlaces: "25", ocupiedPlaces: "7" },
        //        { id: "4", name: "Avangate Tech Session: Responsive Websites", description: "Avangate Tech Session: Responsive Websites", eventDate: "12/03/2014", totalNumberOfPlaces: "10", ocupiedPlaces: "10" },
        //        { id: "5", name: "Work and Study abroad at your master degree", description: "Work and Study abroad at your master degree", eventDate: "12/03/2014", totalNumberOfPlaces: "15", ocupiedPlaces: "3" }
        //    ];

        //    return events;
        //}
        function getEvents() {
            var entityName = model.entityNames.event;            return EntityQuery            .from('Events')            .select('id, name, description, eventDate, totalNumberOfPlaces, ocupiedPlaces')            .toType(entityName)            .using(manager).execute()            .then(querySucceded, _queryFailed);
        }        function querySucceded(data) {
            return data.results;
        }        function _queryFailed(error) {            //do something when an error appeared        }

        function createEvent(name, description, eventDate, totalNumberOfPlaces, ocupiedPlaces) {

            return manager.createEntity(model.entityNames.event, { name: name, description: description, eventDate: eventDate, totalNumberOfPlaces: totalNumberOfPlaces, ocupiedPlaces: ocupiedPlaces });
        }
        
        function saveChanges() {
            if (manager.hasChanges()) {
                manager.saveChanges();
            }
        }
       
    }
})();