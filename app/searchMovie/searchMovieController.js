module.exports = SearchMovieController;

/*@ngInject*/
function SearchMovieController(searchMovieService, $location){
  var vm = this;

  vm.searchTerm = '';
  vm.search = search;
  vm.results = [];
  vm.goToMovieDetails = goToMovieDetails;

  function search() {
    searchMovieService.searchMovie(vm.searchTerm).then(
      function(results){
        angular.copy(results,vm.results);
      }
    );
  }

  function goToMovieDetails(movieId) {
    $location.path('/details/' + movieId);
  }
}
