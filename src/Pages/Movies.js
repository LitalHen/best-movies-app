import React from 'react';
import MoviesGallery from '../Components/MoviesGallery';
import '../Components/components.css';
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
       
        const sortTitle=(this.props.sortByDefault) ? this.props.sortByDefault : this.state.sortValue;
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
        this.choosePage(this.state.currentPage);
    }



    render() {
  console.log(this.props.showPaginator);
        // const checkSort=this.state.mSorted.map((movie,id)=> {
        //     return movie.rate;
        //  })
        //  console.log('check sort by year'+ checkSort)
        return (
            <div >
                <MoviesGallery 
                galleryTitle={this.props.galleryTitle}
                moviesList={this.state.moviesList}
                sortByValue={this.sortByValue}
                showSort={this.props.showSort}
                 />
                 <div className={this.props.showPaginator? '' : 'display-none'}>
                <Paginator 
                showPaginator={this.props.showPaginator}
                totalPages={this.state.totalPages} 
                currentPage={this.state.currentPage}
                setCurrentPage={this.setCurrentPage}
                /></div>
            </div>
        )
    }
  
}

export default Movies;