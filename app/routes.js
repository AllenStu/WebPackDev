module.exports = function(ngModule) {
    ngModule.config(routes);
}

function routes($routeProvider) {
    $routeProvider
        .when("/details/:movieId", {
            template: "<show-movie></show-movie>"
        })
        .otherwise({
            template: "<search-movie></search-movie>"
        });
}