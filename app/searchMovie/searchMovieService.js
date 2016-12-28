module.exports = function(ngModule) {
  ngModule.service('searchMovieService', searchMovieService);
}

function searchMovieService($http) {
  var vm = this;
  var API_BASE_URL = "http://www.omdbapi.com/?";
  vm.searchMovie = searchMovie;

  //given a search term, return a list of movies
  function searchMovie(searchTerm) {
    return $http.get(API_BASE_URL+'s='+searchTerm)
    .then(function(response){
      console.log(response.data.Search);
      return response.data.Search;
    },function(error){
      console.log(error);
    });
  }
}
