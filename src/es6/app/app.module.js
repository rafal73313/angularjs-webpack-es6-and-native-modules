import waAppController from "./app.controller";
import waApp from "./app.directive";

const waAppModule = angular.module('wa.app', [])
    .controller('waAppController', waAppController)
    .directive('waApp', waApp)

export default waAppModule;