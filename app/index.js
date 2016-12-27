var angular = require('angular');

var myModule = angular.module('myApp', [
  require('./searchMovie/index').name
]);

myModule.controller('myController', myController);

function myController($scope) {
  $scope.myVar = 'Search';
}
