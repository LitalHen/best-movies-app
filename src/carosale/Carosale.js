import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap'

export default class Carosale extends Component {
    render() {
      let carouselArr=[]
      for (let i = 4; i < array.length; i++) {
        const element = array[i];
        carouselArr.push( <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={/*element.picture*/}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{/*element.year's*/}</h1>
              <h3>{/*element.name*/}</h3>
              <p>{/*element.description*/}</p>
                </Carousel.Caption>
          </Carousel.Item>
            </Carousel>  )
        
      }
        return (
                    {carouselArr}  
        )
    }
}
