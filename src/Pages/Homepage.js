
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div >
                Homepage
                <HashRouter>
                    <Route exact path="/modified-classics">
            
                    </Route>
                    <Route exact path="/top-rated">
            
                    </Route>
                </HashRouter>
            </div>
        )
    }
  
}

export default Homepage;