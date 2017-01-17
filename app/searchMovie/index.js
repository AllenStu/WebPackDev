var angular = require('angular');

var myModule = angular.module('searchMovieApp', []);

require('./searchMovieService')(myModule);
require('./searchMovieComponent')(myModule);

module.exports = myModule;

