import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_KEY } from '../constants';

class MovieThumbnail extends React.Component{
    constructor(props){
        super(props);
       
    }

        render(){
            const movieCards =  this.props.moviesList.map((movie,id)=> {
                return <Col key={id} lg={2} md={3} sm={6}>
                        <Card >
                        <Link to={`/movies/${movie.id}`}>
                        <Card.Img variant="top" src={movie.poster_path} />
                        </Link>    
                        <div class="card-img-overlay">
                               
              {/* <div> runtime: {`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`}</div> */}
              
              
              <div className="badge badge-light">rate: {movie.rate}</div>
              </div>
              <h5>{movie.title}</h5>  
              <div> popularity:{movie.popularity}</div>
              <div>year: {movie.releaseDate}</div>
                    </Card>
                    </Col> 
                })
           
                return(
                <div className='p-movies-page'>
                    <Row>
                    {movieCards}
                    </Row>
                </div>
                )
            }
        }
export default MovieThumbnail;      