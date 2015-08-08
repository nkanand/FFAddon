function MainController($scope) {

    $scope.ButtonText = 'Hit me!';
    $scope.dirr = 'rtl';
    $scope.logo = './icon-32.png';
}
var Mymodule = angular.module('MyAddon', [])
    .controller('MainCtrl', MainController)