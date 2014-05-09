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
            getEvents: getEvents
        };

        return service;

        function getEvents() {
            var entityName = model.entityNames.event;

            return EntityQuery
                .from('Events')
                .select('id, name, description, eventDate, totalNumberOfPlaces, ocupiedPlaces')
                .toType(entityName)
                .using(manager).execute()
                .then(querySucceded, _queryFailed);
        }
        
        function querySucceded(data) {
            return data.results;
        }
        
        function _queryFailed(error) {
            //do something when an error appeared
        }

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