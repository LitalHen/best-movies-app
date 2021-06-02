import React from 'react';
import { Button } from 'react-bootstrap';
import './SortMovies.css';


class SortMovies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isButtonActive:1
        }
    }
changeActive=()=>{

}
sortByRating=()=>{
    console.log('vote_average.desc')
    this.setState({
        isButtonActive:2
    });
   
}
sortByYear=(e)=>{
    console.log('release_date.desc');
    this.setState({
        isButtonActive:1
    });
  //this.changeActive();

}
        render(){
      
                return(
                    <div className='c-sorting-movies'>
                        <div id="btns">
                        <Button type="button" onClick={()=>this.sortByYear(1)} variant="light" active={this.state.isButtonActive === 1 ? true : false}>latest movies</Button>
                        <Button type="button" onClick={()=>this.sortByRating(2)} variant="light" active={this.state.isButtonActive === 2 ? true : false}>highest raiting</Button>
                        </div>
                    </div>
                    )
         }
}
export default SortMovies;      