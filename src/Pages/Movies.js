import React from 'react';
import { DISNEY_ID } from '../constants';


class Movies extends React.Component {
    constructor(props){
        super(props);
      
    }
    
    componentDidMount = () =>{
        let pageNum=2;

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US&include_adult=false&include_video=true&page=${pageNum}&with_companies=${DISNEY_ID}`)
        .then((stream)=> stream.json())
        .then((res)=>{
            if( res && res.results){
            const movieObj= res.results. map((movie)=>{
                
                return{
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

                    this.setState({
                            moviesList:movieObj
                            })
                 }
                    console.log(this.state.moviesList)
            })
    }
    render() {
        console.log(this.props.moviesList);
        return (
            <div >
                Movies Page
              
            </div>
        )
    }
  
}

export default Movies;