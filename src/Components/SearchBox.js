
// import { Card, ListGroup, Button, Form } from 'bootstrap-react';
import React from 'react';
import { Card, ListGroup, Button, Form  } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { TMDBDiscover, TMDBsearch } from '../utils';



class SearchBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchText:'',
            movieArray: [],
        };
    }
    

 
    chooseMovie = (id) => {
        
        window.location.href = `/#/movies/${id}`
        this.setState({
            searchText:'',
        })
    }

    updateText = (event) =>{
        const val = event.target.value;
     
        this.setState({
            searchText: val
        });
        TMDBsearch(5).then(allMoviesResults => 
            {
                this.setState(
                {
                    movieArray: allMoviesResults,
                })
            }
        )
    }
    openSearchPage = () => {
        
        window.location.href = `#/search-page/${this.state.searchText}`
        this.setState(
            {
                searchText: '',
                movieArray: []
            }
        )
        
    }
    render() {
        const searchResults = this.state.movieArray.filter((obj) => { return obj.title.toUpperCase().includes(this.state.searchText.toUpperCase()); }).map((dataItem, index) => {
            return  <ListGroup.Item  
            className={this.state.searchText === '' ? "display-none" : null}
             action
             key={index}
             onChange={()=> {dataItem.toUpperCase().includes(this.state.searchText.toUpperCase())}}
              onClick= {() => this.chooseMovie(dataItem.id)}
             >
             <div className="search-box-info">
            <div>
            <img className="search-box-image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${dataItem.poster_path}`}/>
            </div>
            <div>
            <p>{dataItem.original_title}</p>
            </div>
            </div>
            </ListGroup.Item>

        });

        return (
            <div>
            <div className="search-box">                                                        
            <Form.Control className="form-control" onChange={this.updateText} value={this.state.searchText} placeholder={"Please Enter Your Query"}/>
            <Button onClick= { this.openSearchPage}className="search-btn">Search</Button>
            </div>
            <ListGroup  className="search-listgroup">                                                                     
                {searchResults}
            </ListGroup>   
          </div>
        )
    }
    
}

export default withRouter(SearchBox);