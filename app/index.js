var angular = require('angular');
require('angular-route');

var myModule = angular.module('myApp', [
  "ngRoute",
  require('./searchMovie/index').name,
  require('./showMovie/index').name
]);

require('./routes')(myModule);
