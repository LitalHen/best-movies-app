import { API_KEY, DISNEY_ID } from './constants';

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
    .then((res) => res.json());
    
}

export const TMDBsearch = (maxPages) => {
    let promiseArr= [];
    // let pages = maxPages - 1;
    for (let i = 1; i <= maxPages; i++) {
       promiseArr.push(  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=true&with_companies=${DISNEY_ID}&page=${i}`)
       .then(res=>  res.json()))
    }

    return  Promise.all(promiseArr)
    .then((jsonObjects)=> {  
        let allMovies = []; 
        // debugger
        for (let i = 0; i < jsonObjects.length; i++) {
           allMovies.push(jsonObjects[i].results)
            
        }

        allMovies =  allMovies.flat();
        //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

        
        /// in javascript - object

        // const foundMovies = {};
        // allMovies.filter(m => {
        //     if(foundMovies[m.id]){
        //         return false;
        //     }
        //     else{
        //         foundMovies[m.id] = true;
        //         return true;
        //     }

        // })

        return allMovies;
    });
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

 
export  const  TMDBDetails = async (id)=>{
    let movie =  fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    let video=  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    const tmdbStream = await Promise.all([movie, video]);
    const tmdbDetails = await tmdbStream[0].json();
    const tmdbvideo = await tmdbStream[1].json();

    let ImdbId= tmdbDetails.imdb_id;
    let omdbInfo= await fetch(`https://www.omdbapi.com/?apikey=de97b29a&i=${ImdbId}`)
    const omdbDetails=await omdbInfo.json();
    
    const language=tmdbDetails.spoken_languages ? tmdbDetails.spoken_languages.map(item=>item.english_name) : null
    const rating= omdbDetails.Ratings ? omdbDetails.Ratings.map((rating)=>{
        return <>{ rating.Source} {rating.Value}</>
    }) : null;

    return { 
               title:tmdbDetails.original_title,
                year: omdbDetails.Year,
                rating: rating,
                runTime:tmdbDetails.runtime,
                plot:omdbDetails.Plot,
                tagLine:tmdbDetails.tagline,
                genre:omdbDetails.Genre,
                director:omdbDetails.Director,
                language:language,
                poster_path: `https://themoviedb.org/t/p/w780/${tmdbDetails.backdrop_path}`,
                video: (tmdbvideo && tmdbvideo.results && tmdbvideo.results[0] && tmdbvideo.results[0]["key"])?tmdbvideo.results[0]["key"]:`https://themoviedb.org/t/p/w780/${tmdbDetails.backdrop_path}`
      }
    }




