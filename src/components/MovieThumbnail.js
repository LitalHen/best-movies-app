import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MovieThumbnail extends React.Component{
    constructor(props){
        super(props);
       
    }

        render(){
      
            const yearMovie = (new Date(this.props.releaseDate)).getFullYear();
                return(
                    <div className='p-movies-page'>
                        <CardDeck>
                       <Card className="text-center"  >
                            <Link to={`/movies/${this.props.id}`}>
                            <Card.Img variant="top" src={this.props.poster_path} />
                            </Link>    
                            <div className="card-img-overlay">     
                                <div className="position-badge">            
                            <div className="badge badge-light badge-right">{yearMovie}</div>
                            <div className="badge badge-light badge-left">{this.props.rate}</div>
                            </div>  
                            </div>
                            <h5 className="min-height">{this.props.title}</h5>  
                            {/* <div> popularity:{this.props.popularity}</div> */}
                            
                          
                    </Card>
                    </CardDeck>
                    </div>
                    )
            }
        }
export default MovieThumbnail;      