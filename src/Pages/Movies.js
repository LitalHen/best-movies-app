import React from 'react';
import MoviesGallery from '../components/MoviesGallery';
import Paginator from '../components/Paginator-generic';
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
        this.choosePage(pageNum);

    }
    choosePage = (pageNum) => {
        TMDBDiscover({page:pageNum})
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
    componentDidMount = () =>{
        this.choosePage(this.state.currentPage);
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