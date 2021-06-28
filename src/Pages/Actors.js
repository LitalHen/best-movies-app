import React from 'react';
import '../Components/components.css';

class Actors extends React.Component{
    constructor(props){
        super(props);
    }
  
    render(){

        const cast = this.props.cast.map((actor)=>{
            return <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`} alt="Card image cap"/>
                      <div class="card-body">
                          <h5 class="card-title">{this.actor.name}</h5>
                          <p class="card-text">{this.props.known_for_department}</p>
                          <a href="#" class="btn btn-primary">More Movies</a>
                      </div>
                  </div>
        })
        
        return(
                <div>
              {cast}
                </div>
        )
    }

}

export default Actors 
