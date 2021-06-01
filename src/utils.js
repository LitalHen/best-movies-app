import { API_KEY, DISNEY_ID } from "./constants";

export const TMDBDiscover = (params) => {
    // Params will be a {key: value} where the key is the api key
    // i.e {with_actor}
    let queries = '';
    if(!params.page) {
        params.page = 1;
    }
    for(let key in params) {
        queries += '&' + key + '=' + params[key]
    }
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=true&with_companies=${DISNEY_ID}${queries}`)
          .then((stream)=> stream.json())
}

export const createMoviesObj = (listOfMovies) => {
  const moviesObj= listOfMovies.results.map((movie)=>{
                //Recieves list of movies from fetch
                // return array of movies obj
                return{
                    movieId: movie.id,
                    title: movie.original_title,
                    laguage: movie.original_language,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                    rate:movie.vote_average,
                    runTime:movie.with_runtime,
                    total_pages:movie.total_pages,
                    popularity:movie.popularity,
                    poster_path: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
                      }

               
                 })
                 return moviesObj;
}

