import React from 'react';
import { Button } from 'react-bootstrap';
import SortButton from './SortButton';
import './SortMovies.css';


class SortMovies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buttonActive:1
        }
        
    }
   
changeActive=()=>{

}
sortByRating=()=>{
    console.log('vote_average.desc')
    this.setState({
        buttonActive:1
    });
   
}
sortByYear=()=>{
    console.log('release_date.desc');
    this.setState({
        buttonActive:2
    });
  //this.changeActive();

}
        render(){
      
                return(
                    <div className='c-sorting-movies'>
                        <div id="btns">
                            <SortButton 
                            sortBy={this.sortByYear}
                            isActive={this.state.buttonActive ==='1' ? true : false}
                            title="latest movies" />
                              <SortButton 
                            sortBy={this.sortByRating}
                            isActive={this.state.buttonActive === '2' ? true : false}
                            title="highest raiting" />
                        </div>
                    </div>
                    )
         }
}
export default SortMovies;      