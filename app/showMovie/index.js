var angular = require('angular');

var myModule = angular.module('showMovieApp', []);

require('./showMovieService')(myModule);
require('./showMovieComponent')(myModule);

module.exports = myModule;