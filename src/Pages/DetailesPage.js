import React, { Component } from 'react'
import {  Tabs,Tab, Container } from 'react-bootstrap'
import { TMDBDetails, TMDBDiscover,} from '../utils';

export default class DetailesPage extends Component {
    constructor(props){
        super(props);
       

        this.state={
            currentMovie:{}

        }

        
    }

 componentDidMount(){
    
    let currentMovieID = this.props.match.params.movieId;  
        TMDBDetails(currentMovieID).then((res) =>{
          
        this.setState({currentMovie:res}) 
     }
   
     )}
   
    
    render() {
       
        console.log('details page')

         
        return (
            <div className="detailsPage">
                <img src={`https://themoviedb.org/t/p/w500//9YAVIwBcBrLXeukg2dgMGfYB1uu.jpg`}></img>
                <Container>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    {/* //tmdbDetails,omdbDetails,tmdbvideo */}
  <Tab eventKey="Title" title="Title">
  <div>{this.state.currentMovie.title}</div> 
  </Tab>
  <Tab eventKey="Year" title="Year">
<div>{this.state.currentMovie.year}</div> 
 </Tab>
  <Tab eventKey="Ratings" title="Ratings">
  <div>{this.state.currentMovie.rating}</div> 
  </Tab><Tab eventKey="Genre" title="Genre">
  <div>{this.state.currentMovie.genre}</div> 
  </Tab><Tab eventKey="Director" title="Director">
  <div>{this.state.currentMovie.director}</div> 
  </Tab><Tab eventKey="Run time" title="Run time">
  <div>{this.state.currentMovie.runTime}</div> 
  </Tab><Tab eventKey="Plot" title="Plot">
  <div>{this.state.currentMovie.plot}</div> 
  </Tab><Tab eventKey="Tag line" title="Tag line">
  <div>{this.state.currentMovie.tagLine}</div> 
  {/* </Tab><Tab eventKey="Trailers" title="Trailers">
  <div>{this.state.currentMovie.Trailers}</div>  */}
  </Tab><Tab eventKey="Language" title="Language">
  <div>{this.state.currentMovie.rating}</div> 
  </Tab><Tab eventKey="Actors" title="Actors">
  <div>{this.state.currentMovie.rating}</div> 
  </Tab>
  
</Tabs>
</Container>
 
            </div>
        )
    }
}
