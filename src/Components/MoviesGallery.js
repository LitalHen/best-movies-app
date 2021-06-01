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
           
            return (
         
             <Col className="py-2" key={id} lg={2} md={3} sm={6}>
            <MovieThumbnail
             id={id}
             poster_path={movie.poster_path}
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
            <Row className="mx-0">
              {movieCards}
            </Row>
          </div>
            )
        }
    }
    export default MoviesGallery;  