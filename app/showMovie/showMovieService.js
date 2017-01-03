module.exports = function(ngModule){
    ngModule.service('showMovieService', showMovieService);
}

function showMovieService($http){

    var vm = this;
    var API_BASE_URL = "http://www.omdbapi.com/?";
    vm.getMovie = getMovie;

    //given a search term, return a list of movies
    function getMovie(movieId) {
        return $http.get(API_BASE_URL+'i='+movieId)
        .then(function(response){
            console.log(response.data);
            return response.data;
        },function(error){
            console.log(error);
        });
    }
}