import waAppModule from "./app/app.module";
import submModules from "../es6_submodules/submodules.config";

angular.module('wa', [
    'wa.templates',
    'vw',
    waAppModule.name,
    submModules.name
])