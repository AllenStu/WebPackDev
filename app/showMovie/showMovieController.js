module.exports = ShowMovieController;

/*@ngInject*/
function ShowMovieController(showMovieService, $routeParams) {
  var vm = this;

  init();

  //function definitions below
  function init(){
    showMovieService.getMovie($routeParams.movieId).then(function(data){
      vm.movie = data;
    });
  }
}
