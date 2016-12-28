module.exports = ShowMovieController;

function ShowMovieController(showMovieService, $routeParams) {
  var vm = this;

  init();

  //function defiinitions below
  function init(){
    showMovieService.getMovie($routeParams.movieId).then(function(data){
      vm.movie = data;
    });
  }
}
