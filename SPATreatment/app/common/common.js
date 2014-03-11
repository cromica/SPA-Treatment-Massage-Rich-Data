(function () {
    'use strict';

    var serviceId = 'common';

    var commonModule = angular.module(serviceId, []);

    commonModule.factory(serviceId, ['$q', '$rootScope', '$timeout', 'routes', common]);
    
    function common($q, $rootScope, $timeout, routes) {
        var service = {
            //common angular dependencies
            $q: $q,
            $timeout: $timeout,
            activateController: activateController,
            getNavRoutes: getNavRoutes
        };

        return service;
        
        function activateController(promises, controllerId) {
            return $q.all(promises).then(function(eventArgs) {
                var data = { controllerId: controllerId };
              //broadcast that the controller was activated
            });
        }
        
        function getNavRoutes() {
            //return the routes
        }
    }
})();