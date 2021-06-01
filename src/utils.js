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
}

export const TMDBsearch = (maxPages) => {
    let promiseArr= [];
    // let pages = maxPages - 1;
    for (let i = 1; i <= maxPages; i++) {
       promiseArr.push(  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=true&with_companies=${DISNEY_ID}&page=${i}`)
       .then(res=>  res.json()))
       console.log(promiseArr);
    }
   
// console.log(promiseArr);

    return  Promise.all(promiseArr)
    .then((jsonObjects)=> {  
        let allMovies = []; 
        // debugger
        for (let i = 0; i < jsonObjects.length; i++) {
           allMovies.push(jsonObjects[i].results)
            
        }
        // let test = allMovies.join();
        // console.log(test);
        // console.log(allMovies);
        // console.log(jsonObjects);

        // console.log(jsonObjects)
        allMovies =  allMovies.flat();
        
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

// console.log(jsonObjects[pages].results