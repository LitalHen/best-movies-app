import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap'
import { TMDBDiscover } from '../utils'



export default class Carosale extends Component {
  constructor(props){
    super(props)
    this.state={
      carouselArr:[]
    }
  }
componentDidMount = () =>{
   TMDBDiscover({page: Math.floor((Math.random() * 4) ), sort_by:"popularity.desc"}).then((res)=>{this.setState({carouselArr:res.results})})
   
   }
   
    
   




   
    render() {
      let newCarouselArr=[]
      let numArr=[]

      if(this.state.carouselArr.length>=5){
      for (let i = 5; i > 0; i--) {
        let num=Math.floor((Math.random() * 19) + 0)
        const element =(!numArr.includes(num))? this.state.carouselArr[num]: i++
       numArr.push(num)
       if(element.backdrop_path){
        newCarouselArr.push(
          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
              src={`https://themoviedb.org/t/p/w400//${element.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{`${element.release_date}`}</h1>
              <h3>{element.original_title}</h3>
              
                </Carousel.Caption>
          </Carousel.Item>
             )
        
      }}}
        return (  <Carousel>
                    {newCarouselArr} 
                    </Carousel>        )
    }
}
