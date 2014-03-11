(function () {
    'use strict';

    var serviceId = 'entityManagerFactory';

    angular.module('app').factory(serviceId, ['model', entityManagerFactory]);

    function entityManagerFactory(model) {
        breeze.config.initializeAdapterInstance('modelLibrary', 'backingStore', true);
        breeze.NamingConvention.camelCase.setAsDefault();
        
        var serviceName = 'breeze/Breeze';
        var metadataStore = createMetadataStore();

        var provider = {
            metadataStore: metadataStore,
            newManager: newManager
        };

        return provider;

        function createMetadataStore() {
            var store = new breeze.MetadataStore();
            model.configureMetadataStore(store);
            return store;
        }

        function newManager() {
            var mgr = new breeze.EntityManager({
                serviceName: serviceName,
                metadataStore: metadataStore
            });
            return mgr;
        }
    }
})();