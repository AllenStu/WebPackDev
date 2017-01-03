module.exports = ShowMovieController;

/*@ngInject*/
function ShowMovieController(showMovieService, $routeParams) {

    var vm = this;

    init();

    function init(){
        showMovieService.getMovie($routeParams.movieId).then(function(data){
            vm.movie = data;
        });
    }
}