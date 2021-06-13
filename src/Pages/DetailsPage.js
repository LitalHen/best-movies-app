import React, { Component } from 'react'
import {  Tabs,Tab, Container, Row, Col, Image, Card } from 'react-bootstrap'
import { withRouter } from 'react-router';
import { TMDBCast, TMDBDetails, TMDBDiscover,} from '../utils';
import YouTube from 'react-youtube';
import Actors from './Actors';

 class DetailsPage extends React.Component {
    constructor(props){
        super(props);
       
        this.state={
            currentMovie:{},
            isLoading:true,
            movieId:0,
            cast:{}

        }
   
    }

    
 componentDidMount(){
 

    let currentMovieID =this.props.match.params.movieId; 
 
        TMDBDetails(currentMovieID).then((movieStream) =>{
            TMDBCast(currentMovieID).then((castStream) =>{

                    this.setState({
                            currentMovie:movieStream,
                            movieId: currentMovieID,
                            cast:castStream
                    })
 })

            }
          
                    
   
          )
     
        }
   //ACTORS MOVIES- ON CLICK- MORE MOVIES
     componentDidUpdate(){
 
        if (this.props.match.params.movieId != this.state.movieId){
            
            let newMovieID =this.props.match.params.movieId; 
     
            TMDBDetails(newMovieID).then((movieStream) =>{
                TMDBCast(newMovieID).then((castStream) =>{
              
                         this.setState({
                             currentMovie:movieStream,
                             movieId:newMovieID,
                             cast:castStream
                            })
                        })
                     })
                     
           }
              
      }
   
         
    render() {
        const video= (this.state.currentMovie.video===null)?
        <Image className="no-video-img" src="https://thumbs.dreamstime.com/z/print-177190284.jpg"/>
        : <YouTube videoId={this.state.currentMovie.video}/>;
        return (
                <div className="detailsPage">
                    <div className="tagLine"> 
                        {this.state.currentMovie.tagLine}
                     </div>

                     <div className="upper-info">
                            <Image className="movie-img" src={this.state.currentMovie.poster_path}></Image>
                            <Card style={{ width: '30rem' }}>
                                    <Card.Body>
                                        <Card.Title>{this.state.currentMovie.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{this.state.currentMovie.plot}</Card.Subtitle>
                                        <Card.Text> <span>Relesed Year:</span> {this.state.currentMovie.year}</Card.Text>
                                        <Card.Text> <span>Run time:</span> {this.state.currentMovie.runTime} minuts </Card.Text>
                                        <Card.Text> <span>Rated</span> {this.state.currentMovie.rating} </Card.Text>
                                        <Card.Text> <span>Directed by:</span> {this.state.currentMovie.director}</Card.Text>
                                        <Card.Text> <span>Genres: </span>{this.state.currentMovie.genre}</Card.Text>
                                        <Card.Text> <span>Languages:</span> {this.state.currentMovie.language}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </div>
                            <div className="down-info">
                            {/* style={{ width: '30rem' }} */}
                            {/* <Card className="pl">
                                <Card.Body>
                                        <Card.Title>{this.state.currentMovie.plot}</Card.Title>
                                </Card.Body>
                            </Card> */}
                        <div class="video-info">
                              {video}
                        </div>
                </div>
                <div className="movie-actor">

                    <Actors
                    actors={this.state.cast}/>
                </div>
            </div>
        )
    }
}


export default withRouter(DetailsPage)
