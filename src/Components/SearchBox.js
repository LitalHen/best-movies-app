
// import { Card, ListGroup, Button, Form } from 'bootstrap-react';
import React from 'react';
import { Card, ListGroup, Button, Form  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    componentDidMount = () => { 
        this.setPage(1);
     }

   // setPage calls the API and when the results are returned we override this.state.movieArray with the results from the API.
    //the pageNum parameter is passed to the API. 

    setPage = (pageNum) => {
        TMDBDiscover({ page: pageNum })
        .then((data) => {  
            this.setState({ movieArray: data.results });
        });   
    }  
    
 
    

    // componentDidMount = () => {     // put change text var instead of adam
    //     fetch("https://api.themoviedb.org/3/search/movie?api_key=1ee3645441ba4ed79b9da803ead5ce9a&query=adam")
    //     .then((res) =>  res.json())          
    //     .then(data =>  console.log(data))
    //      .catch((err) => {
    //         alert('the ajax call has failed')
    //         console.log(err)
    //       })
    //   }

 
     
    
    //     const objOfMovie = data.map((movie) => { 
    //        return{
    //         title: movie.original_title,
    //         language: movie.original_language,
    //         overview: movie.overview,
    //         releaseDate: movie.release_date,
    //         rate: movie.vote_average,
    //         total_pages: movie.total_pages,
    //         popularity: movie.popularity,
    //        }
    //     })
    
            

    // }
    

    updateText = (event) =>{
        const val = event.target.value;
        // Update the internal state
        this.setState({
            searchText: val
        });
        TMDBsearch(5).then(allMoviesResults => 
            {
                // debugger;
                this.setState(
                {
                    movieArray: allMoviesResults,
                })
            }
        )

        // update the parent component 
        // this.props.onSearchChanged(val);
    }
    // resultSelected = (index) => {
    //     this.props.onResultSelected(index);
    //     this.setState({
    //         searchText: ''
    //     });
    //     // this.props.onSearchChanged('');
    // }
    
    render() {
        const searchResults = this.state.movieArray.filter((obj) => { return obj.title.toUpperCase().includes(this.state.searchText.toUpperCase()); }).map((dataItem, index) => {
            return  <ListGroup.Item  
            className={this.state.searchText === '' ? "display-none" : null}
             action
             key={index}
             onChange={()=> {dataItem.toUpperCase().includes(this.state.searchText.toUpperCase())}}
            onClick= {() =>  {window.location.href = `movies/${dataItem.id}`}}
             >
              {dataItem.original_title}
            </ListGroup.Item>
        });
        

        // this.search(5)
        return (
            <div>
            <div className="search-box">                                                        
            {/* Nullish coalescing operator (??)  if   this.props.placeholder  is undefined will show text "Please remember to pass props"*/}
            <Form.Control className="search-form-control" onChange={this.updateText} value={this.state.searchText} placeholder={"Please enter your query"}/>
            <Link to={`/search-page/${this.state.searchText}`}><Button className="search-btn">Search</Button></Link>
            </div>
            <ListGroup  className="search-listgroup" >                                                                     
                {searchResults}
            </ListGroup>
        


                   {/* Searchpage <br></br><br></br>
      
            <br></br><br></br>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button> */}
                        {/* <Button onClick={() => { const pageValue = prompt("Please enter page number"); this.setPage(pageValue);  }}>Change Page</Button> */}
                  {/* </Card.Body> */}
              {/* </Card> */}
          </div>
        )
    }
    
}

export default SearchBox;