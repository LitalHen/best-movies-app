import React, { Component } from 'react'
import {  Tabs,Tab, Container, Row, Col, Image, Card } from 'react-bootstrap'
import { withRouter } from 'react-router';
import { TMDBDetails, TMDBDiscover,} from '../utils';
import YouTube from 'react-youtube';

 class DetailesPage extends React.Component {
    constructor(props){
        super(props);
       
        this.state={
            currentMovie:{},
            isLoading:true

        }
   
    }

 componentDidMount(){
 

    let currentMovieID =this.props.match.params.movieId; 
 
        TMDBDetails(currentMovieID).then((res) =>{
          
                     this.setState({currentMovie:res})
                 }
   
          )
     }
   
    
    render() {
        return (
                <div className="detailsPage">
                    <div className="tagLine"> 
                        {this.state.currentMovie.tagLine} </div>

                        <div className="upperInfo">
                            <YouTube videoId={this.state.currentMovie.video}/>;
                            
                            <Card style={{ width: '30rem' }}>
                                    <Card.Body>
                                        <Card.Title>{this.state.currentMovie.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{this.state.currentMovie.plot}</Card.Subtitle>
                                        <Card.Text>{this.state.currentMovie.year}</Card.Text>
                                        <Card.Text>{this.state.currentMovie.runTime} minuts </Card.Text>
                                        <Card.Text> Rated {this.state.currentMovie.rating} </Card.Text>
                                        <Card.Text> Directed by: {this.state.currentMovie.director}</Card.Text>
                                        <Card.Text>Genres: {this.state.currentMovie.genre}</Card.Text>
                                        <Card.Text>Languages:{this.state.currentMovie.language}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </div>
                            <div className="downInfo">
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                        <Card.Title>{this.state.currentMovie.plot}</Card.Title>
                                </Card.Body>
                            </Card>
                        <div>
                            <Image className="movie-img" src={this.state.currentMovie.poster_path}></Image>
                        </div>
                </div>
            </div>
        )
    }
}


export default withRouter(DetailesPage)
