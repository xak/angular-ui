'use strict';
function onGoogleReady() {
    angular.bootstrap(document.getElementById("myApp"), ['myApp']);
}
/** app level module which depends on services and controllers */
angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'ui.utils']);
