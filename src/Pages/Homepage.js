import React from 'react'
import { Route } from 'react-router';
import Carosale from '../carosale/Carosale';
import { DISNEY_ID } from '../constants';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            moviesList:[]
        }
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
    render(){
        return(
            <div>
                <Carosale></Carosale>
                <Route exact path="/modified-classics">
        
                </Route>
                <Route exact path="/top-rated">
        
                </Route>
            </div>

        )
    }
}

export default HomePage; 