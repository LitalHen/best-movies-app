
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Paginator from '../Components/Paginator-generic';

class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            currentPage: 1,

        }
    }

    setCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        return (
            <div >
                Homepage
                <Paginator
                    currentPage={this.state.currentPage}
                    totalPageNums={8}
                    setCurrentPage={this.setCurrentPage}/>
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