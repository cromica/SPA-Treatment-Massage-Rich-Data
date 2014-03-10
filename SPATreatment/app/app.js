(function () {
    'use strict';

    var id = 'app';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules
        
    ]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$route','$q', '$rootScope',
        function ($route,$q, $rootScope) {
           // breeze.core.extendQ($rootScope, $q);
        }]);
})();