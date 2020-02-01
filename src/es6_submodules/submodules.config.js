import submHeadOneModule from "./headOne/headOne.module";

const submModules = angular.module('subm', [
    'wa.templates',
    submHeadOneModule.name
])

export default submModules;