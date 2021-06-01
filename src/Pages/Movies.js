import React from 'react';
import MoviesGallery from '../Components/MoviesGallery';
import Paginator from '../Components/Paginator-generic';
import { createMoviesObj, TMDBDiscover } from '../utils';


class Movies extends React.Component {
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
        .then((listOfMovies)=>{
            if( listOfMovies && listOfMovies.results){
            const pages=listOfMovies.total_pages;
            const moviesObj = createMoviesObj(listOfMovies);
            
                    this.setState({
                            moviesList:moviesObj,
                            totalPages:pages
                            })
                 }
                   
            })
    }
    render() {
       
        return (
            <div >
                <MoviesGallery moviesList={this.state.moviesList} />
                <Paginator 
                totalPages={this.state.totalPages} 
                currentPage={this.state.currentPage}
                setCurrentPage={this.setCurrentPage}
                />
            </div>
        )
    }
  
}

export default Movies;