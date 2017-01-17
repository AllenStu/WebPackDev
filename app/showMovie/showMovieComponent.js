module.exports = function(ngModule) {
    ngModule.component('showMovie', {
        template: require('./showMovie.html'),
        controller: require('./showMovieController'),
        bindings: {
        }
    });
}

