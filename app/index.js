var angular = require('angular');
require('angular-route');
require('material-design-lite/material.min.css');
require('material-design-lite/material.min.js');
require('./searchMovie/searchMovieTemplate.scss');

var myModule = angular.module('myApp', [
  "ngRoute",
  require('./searchMovie/index').name,
  require('./showMovie/index').name
]);

require('./routes')(myModule);

