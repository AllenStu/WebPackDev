module.exports = SearchMovieController;

function SearchMovieController(searchMovieService){
  var vm = this;

  vm.searchTerm = '';
  vm.search = search;
  vm.results = [];

  function search() {
    searchMovieService.searchMovie(vm.searchTerm).then(
      function(results){
        angular.copy(results,vm.results);
      }
    );
  }
}
