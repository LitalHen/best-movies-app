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
            currentPage:1,
            sortValue:'vote_average.desc'

        }
    }
    sortByValue=(val)=>{
    
        this.setState({
            sortValue:val
            },()=>{this.choosePage(this.state.currentPage)})
            
    }

    setCurrentPage = (pageNum) =>{
       
        this.setState({
            currentPage:pageNum
        })
        this.choosePage(pageNum);

    }

    choosePage = (pageNum) => {
       
        const sortTitle=this.state.sortValue;
        TMDBDiscover({sort_by:sortTitle,page:pageNum})
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
    
//const releaseDate='release_date.desc';
// const releaseDate='vote_average.desc';
// TMDBDiscover({sort_by:releaseDate,page:1})
//         .then((listOfMovies)=>{
//             if( listOfMovies && listOfMovies.results){
//             const pages=listOfMovies.total_pages;
//             const moviesSorted = createMoviesObj(listOfMovies);
//                 // console.log('pages: '+pages)
//                 // console.log('sort by date'+moviesSorted)
//                 this.setState({
//                     mSorted:moviesSorted
//                     })
//         }
                   
//     })
    
    
   
        this.choosePage(this.state.currentPage);
    }



    render() {
        // const checkSort=this.state.mSorted.map((movie,id)=> {
        //     return movie.rate;
        //  })
        //  console.log('check sort by year'+ checkSort)
        return (
            <div >
                <MoviesGallery 
                galleryTitle="All movies"
                moviesList={this.state.moviesList}
                sortByValue={this.sortByValue}
                 />
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