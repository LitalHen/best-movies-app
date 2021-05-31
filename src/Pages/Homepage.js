import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import {useTMDBDiscover} from '../utils'; 
class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            moviesList:[],
            totalPages:1,
            currentPage:1

        }
    }

    setCurrentPage = (pageNum) =>{

        this.setState({
            currentPage:pageNum
        })

    }

    componentDidMount = () =>{
      
       TMDBDiscover({page:this.state.currentPage})
        .then((stream)=> stream.json())
        .then((res)=>{
            if(res && res.results){
                const pages=res.total_pages;
                const movieObj= res.results.map((movie)=>{
                return{
                    movieId: movie.id,
                    title: movie.original_title,
                    laguage: movie.original_language,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                    rate:movie.vote_average,
                    //runTime:movie.with_runtime,
                    total_pages:movie.total_pages,
                    popularity:movie.popularity,
                    poster_path: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
                      }

               
                                    })

                    this.setState({
                            moviesList:movieObj,
                            totalPages:pages
                            })
                 }
            })
    }
    render(){
        return(
            <div>
                <Route exact path="/modified-classics">
                   
                </Route>
                <Route exact path="/top-rated">
                </Route>
               {/* <MovieThumbnail
                 moviesList={this.state.moviesList}/> */}
                
            </div>

        )
    }
}

export default HomePage; 