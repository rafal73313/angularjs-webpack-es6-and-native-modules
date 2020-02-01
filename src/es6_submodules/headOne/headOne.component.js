import './headOne.css';

const submHeadOne = {
    templateUrl: 'src/es6_submodules/headOne/headOne.template.html',
    bindings: {},
    controller: function ($scope) {
        "ngInject"
        console.log('aight - submodule HeadOne!!!');
        $scope.title = 'This is head one, aight!'
    }
}

export default submHeadOne;