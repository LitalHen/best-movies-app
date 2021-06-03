import React from 'react';
import { Button } from 'react-bootstrap';
import './SortMovies.css';


class SortButton extends React.Component{
    constructor(props){
        super(props);
      
    }

    
        render(){
      
                return(
                   
                        // <Button type="button" onClick={()=>this.sortByYear(1)} variant="light" active={this.state.isButtonActive === 1 ? true : false}>{this.props.title}</Button>
                        <Button type="button" onClick={this.props.sortBy} variant="light" active={this.props.isActive}>{this.props.title}</Button>
                       
                    )
         }
}
export default SortButton;      