import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieThumbnail extends React.Component{
    constructor(props){
        super(props);
       
    }

        render(){
      
            const yearMovie = (new Date(this.props.releaseDate)).getFullYear();
            console.log(yearMovie)
                return(
                    <div className='p-movies-page'>
                       <Card text-center >
                            <Link to={`/movies/${this.props.id}`}>
                            <Card.Img variant="top" src={this.props.poster_path} />
                            </Link>    
                            {/* <div class="card-img-overlay"> */}                   
                           
                            {/* </div> */}
                            <h5>{this.props.title}</h5>  
                            <div> popularity:{this.props.popularity}</div>
                            <div>year: {yearMovie}</div>
                            <div className="badge badge-light">rate: {this.props.rate}</div>
                          
                    </Card>
                    </div>
                    )
            }
        }
export default MovieThumbnail;      