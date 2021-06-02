import React, { Component } from 'react'
import {  Tabs,Tab, Container, Row, Col, Image, Card } from 'react-bootstrap'
import { withRouter } from 'react-router';
import { TMDBDetails, TMDBDiscover,} from '../utils';
import YouTube from 'react-youtube';

 class DetailesPage extends React.Component {
    constructor(props){
        super(props);
       

        this.state={
            currentMovie:{}

        }


        // let movie = this.props.match.params.movieid
        
    }

 componentDidMount(){
   

    let currentMovieID =this.props.match.params.movieId; 
 
        TMDBDetails(currentMovieID).then((res) =>{
          
        this.setState({currentMovie:res}) 
     }
   
     )}
   
    
    render() {
console.log(this.state.currentMovie.video)
        return (
            <div className="detailsPage">
                <div className="tagLine">                        {this.state.currentMovie.tagLine} </div>

                <div className="upperDits">
                    <YouTube videoId={this.state.currentMovie.video}/>;
                    
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.currentMovie.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.currentMovie.plot}</Card.Subtitle>
                        <Card.Text>{this.state.currentMovie.year}</Card.Text>
                        <Card.Text>
                        {this.state.currentMovie.runTime} minuts
                        </Card.Text>
                        <Card.Text>
                        Rated {this.state.currentMovie.rating}/10
                        </Card.Text>
                        <Card.Text>
                       Directed by: {this.state.currentMovie.director}
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                        <Card.Text>
                        {this.state.currentMovie.genre}
                        </Card.Text>

                    </Card.Body>
                    </Card>
                    </div>
                    <div className="downDits">

                    <Card style={{ width: '30rem' }}>
                    <Card.Body>
                    <Card.Title> <div>{this.state.currentMovie.plot}</div></Card.Title>

    </Card.Body>
    </Card>
<div>

<Image className="movie-img" src={this.state.currentMovie.poster_path} ></Image>
</div>
</div >
<div>{this.state.currentMovie.language}</div> 

            </div>
        )
    }
}


export default withRouter(DetailesPage)
