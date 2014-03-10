(function() {
    'use strict';

    var app = angular.module('app');

    //collect the routes in a variable
    app.constant('routes', getRoutes());

    app.config(['$routeProvider', 'routes', routeConfigurator]);
    
    function routeConfigurator($routeProvider,routes) {
        
        //set the configured routes dynamic
        routes.forEach(function(r) {
            setRoute(r.url, r.config);
        });

        $routeProvider.otherwise({ redirectTo: '/' });
        
        function setRoute(url, definition) {
            //set resolvers for all the routes
            //by extending any existing resolvers (or creating a new one)
            definition.resolve = angular.extend(definition.resolve || {});

            $routeProvider.when(url, definition);
            return $routeProvider;
        }

    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: '/app/events/events.html',
                    title: 'Events',
                    settings: {
                        nav: 1,
                        content:'<i class="fa fa-home"></i>'
                    }
                        
                }
            }
        ];
    }

})();