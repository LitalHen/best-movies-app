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
                <Container sm={12} md={6} lg={3}>
                <Row>
                    <Col xs={6} md={3}>
                        <Image className="movie-img" src={this.state.currentMovie.poster_path} ></Image>
                        </Col>
                </Row>

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
                    </Card.Body>
                    </Card>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    {/* //tmdbDetails,omdbDetails,tmdbvideo */}

 <Tab eventKey="Genre" title="Genre">
  <div>{this.state.currentMovie.genre}</div> 
  </Tab><Tab eventKey="Director" title="Director">
  <div>{this.state.currentMovie.director}</div> 
  </Tab><Tab eventKey="Tag line" title="Tag line">
  <div>{this.state.currentMovie.tagLine}</div> 
  {/* </Tab><Tab eventKey="Trailers" title="Trailers">
  <div>{this.state.currentMovie.Trailers}</div>  */}
  </Tab><Tab eventKey="Language" title="Language">
  <div>{this.state.currentMovie.language}</div> 
  </Tab><Tab eventKey="Actors" title="Actors">
  </Tab>
  
</Tabs>
</Container>
 
            </div>
        )
    }
}


export default withRouter(DetailesPage)
