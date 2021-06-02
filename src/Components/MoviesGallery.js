import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MovieThumbnail from './MovieThumbnail';
import './MovieThumbnail.css';

class MoviesGallery extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
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
        console.log(this.props.moviesList)
        return(
            <div >
                movies gallery
                
            <Row className="row-cols-lg-5 row-cols-md-4 row-cols-sm-2  mx-0 my-2">
              {movieCards}
              </Row>
          </div>
            )
        }
    }
    export default MoviesGallery;  