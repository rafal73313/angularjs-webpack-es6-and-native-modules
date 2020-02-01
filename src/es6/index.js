import waAppModule from "./app/app.module";

angular.module('wa', [
    'wa.templates',
    'vw',
    waAppModule.name
])