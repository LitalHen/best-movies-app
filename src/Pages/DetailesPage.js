import React, { Component } from 'react'
import {  Tabs,Tab, Container } from 'react-bootstrap'
import { TMDBDiscover } from '../utils';

export default class DetailesPage extends Component {
    constructor(props){
        super(props);
        this.movieId = 741074;

        
    }
    componentDIdMount(){
        TMDBDiscover({id:this.movieId})
    }
    
    render() {
    console.log(this.movieId)

        return (
            <div className="detailsPage">
                <img src={`https://themoviedb.org/t/p/w500//9YAVIwBcBrLXeukg2dgMGfYB1uu.jpg`}></img>
                <Container>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Title" title="Title">
  <div>{}</div> 
  </Tab>
  <Tab eventKey="Year" title="Year">
<div></div> 
 </Tab>
  <Tab eventKey="Ratings" title="Ratings">
  <div></div> 
  </Tab><Tab eventKey="Genre" title="Genre">
  <div></div> 
  </Tab><Tab eventKey="Director" title="Director">
  <div></div> 
  </Tab><Tab eventKey="Run time" title="Run time">
  <div></div> 
  </Tab><Tab eventKey="Plot" title="Plot">
  <div></div> 
  </Tab><Tab eventKey="Tag line" title="Tag line">
  <div></div> 
  </Tab><Tab eventKey="Trailers" title="Trailers">
  <div></div> 
  </Tab><Tab eventKey="Language" title="Language">
  <div></div> 
  </Tab><Tab eventKey="Actors" title="Actors">
  <div></div> 
  </Tab>
  
</Tabs>
</Container>
 
            </div>
        )
    }
}
