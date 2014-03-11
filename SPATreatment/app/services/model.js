(function () {
    'use strict';

    var serviceId = 'model';

    angular.module('app').factory(serviceId, [ model]);

    function model() {
        // Define the functions and properties to reveal.
        var entityNames = {
            event: 'Event'
        };

        var service = {
            configureMetadataStore: configureMetadataStore,
            entityNames: entityNames
        };

        return service;

        function configureMetadataStore(metadataStore) {
            //add object constructor with specific view properties
            registerEvent(metadataStore);
        }
        
        function registerEvent(metadataStore) {
            metadataStore.registerEntityTypeCtor('Event', Event);

            function Event() {
            }
        }
    }
})();