
// import { Card, ListGroup, Button, Form } from 'bootstrap-react';
import React from 'react';
import { Card, ListGroup, Button, Form  } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import SearchPage from '../Pages/SearchPage';
import { TMDBDiscover, TMDBsearch } from '../utils';



class SearchBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchText:'',
            movieArray: [],
        };
    }
    
    //  to change page. passing the func a parameter. set the first page to be 1 in componentDidMount which happens once.
    // componentDidMount = () => { 
    //     this.setPage(1);
    //  }

   // setPage calls the API and when the results are returned we override this.state.movieArray with the results from the API.
    //the pageNum parameter is passed to the API. 

    // setPage = (pageNum) => {
    //     TMDBDiscover({ page: pageNum })
    //     .then((data) => {  
    //         this.setState({ movieArray: data.results });
    //     });   
    // }  
    
 
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
        
        <SearchPage searchResults={this.state.searchText}></SearchPage>
        // this.search(5)
        return (
            <div>
            <div className="search-box">                                                        
            {/* Nullish coalescing operator (??)  if   this.props.placeholder  is undefined will show text "Please remember to pass props"*/}
            <Form.Control className="form-control" onChange={this.updateText} value={this.state.searchText} placeholder={"Please Enter Your Query"}/>
            <Link to={`/search-page/${this.state.searchText}`}><Button className="search-btn">Search</Button></Link>
            </div>
            <ListGroup  className="search-listgroup">                                                                     
                {searchResults}
            </ListGroup>   
          </div>
        )
    }
    
}

export default withRouter(SearchBox);