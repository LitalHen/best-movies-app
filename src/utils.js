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

