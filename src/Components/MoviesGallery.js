import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieThumbnail from './MovieThumbnail';
import './MovieThumbnail.css';
import SortMovies from './SortMovies';

class MoviesGallery extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        // console.log('Movies list'+this.props.moviesList);
        // console.log('Total pages'+this.props.totalPages);
        // console.log('Current page'+this.props.currentPage);

        const movieCards =  this.props.moviesList.map((movie,id)=> {
        const checkPoster = movie.poster_path.includes('null');
            return ( 
             <Col className="py-2 col-6" key={id}  >
            <MovieThumbnail
             movieId={movie.movieId}
             poster_path={(!checkPoster) ? movie.poster_path : './No_image.png'}
             rate={movie.rate}
             title={movie.title}
             popularity={movie.popularity}
             releaseDate={movie.releaseDate}
             />
             </Col>
        
             )
         })
       
        return(
            <div >
                 <Container>
               <Row className="mx-0 text-center">
                   <Col>
                   <h3 className="text-center">{this.props.galleryTitle}
                   </h3>
                   </Col>
                </Row> 
                <Row className="mx-0 text-center">
                   <Col>
                   <SortMovies></SortMovies>
                   </Col>
                </Row> 
                <Row className="row-cols-lg-5 row-cols-md-4 row-cols-sm-2  mx-0 my-2">
                 {movieCards}
                </Row>
                </Container>
          </div>
            )
        }
    }
    export default MoviesGallery;  