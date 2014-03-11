(function () {
    'use strict';

    var id = 'app';

    var app = angular.module(id, [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',           // routing

        // Custom modules 
        'common',
        // 3rd Party Modules
       'breeze.angular.q' // tells breeze to use $q instead of Q.js
        
    ]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$route','$q', '$rootScope','use$q',
        function ($route,$q, $rootScope,use$q) {
            // breeze.core.extendQ($rootScope, $q);
            use$q($q);
        }]);
})();