module.exports = function(ngModule) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 7e43a2ff4f56d6fbe433d511c664a66295814dc8
