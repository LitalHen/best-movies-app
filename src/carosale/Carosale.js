import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import { TMDBDiscover } from '../utils';
import './carosale.css';



export default class Carosale extends Component {
  constructor(props){
    super(props)
    this.state={
      carouselArr:[]
    }
  }
componentDidMount = () =>{
   TMDBDiscover({page: 0, sort_by:"popularity.desc"})
   .then((res)=>{this.setState({carouselArr:res.results})})
   
   }
    render() {
      const shuffledMovies = this.state.carouselArr.sort( (a, b) => {
        return Math.random() - 0.5
        } )
         let newCarouselArr=[]
         if(this.state.carouselArr.length>0){
          for (let i = 5; i > 0; i--) {
             const element = shuffledMovies[i]
                 {
             newCarouselArr.push(
             <Carousel.Item interval={3500}>
              <img
              className="d-block w-100"
              src={`https://themoviedb.org/t/p/w1280/${element.backdrop_path}`}
              alt="First slide"
              />

               <Carousel.Caption>
               <div> <h1>{element.release_date}</h1></div> 

               <div><h3>{element.original_title}</h3></div> 
              
               </Carousel.Caption>
               </Carousel.Item>
             )
        
      }}}
        return (    <Carousel className="mt-3 slider-design">
                    {newCarouselArr} 
                    </Carousel>        ) 

    }
}
