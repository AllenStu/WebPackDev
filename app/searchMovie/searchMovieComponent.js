module.exports = function(ngModule) {
    ngModule.component('searchMovie', {
        template: require('./searchMovie.html'),
        controller: require('./searchMovieController'),
        bindings: {
        }
    });
}

