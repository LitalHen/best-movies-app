
// import { Card, ListGroup, Button, Form } from 'bootstrap-react';
import React from 'react';
import { Card, ListGroup, Button, Form, Row, Container, Col  } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { TMDBDiscover, TMDBsearch } from '../utils';



class SearchPage extends React.Component {
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
    

    // updateText = (event) =>{
    //     const val = event.target.value;
    //     // Update the internal state
    //     this.setState({
    //         searchText: val
    //     });
    //     TMDBsearch(5).then(allMoviesResults => 
    //         {
    //             // debugger;
    //             this.setState(
    //             {
    //                 movieArray: allMoviesResults,
    //             })
    //         }
    //     )

    //     // update the parent component 
    //     // this.props.onSearchChanged(val);
    // }
    // resultSelected = (index) => {
    //     this.props.onResultSelected(index);
    //     this.setState({
    //         searchText: ''
    //     });
    //     // this.props.onSearchChanged('');
    // }
    componentDidMount(){
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
        let searchText = this.props.match.params.text
  
        const searchResultsCards = this.state.movieArray.filter((obj) => { 
            return    obj.original_title.toUpperCase().includes(searchText.toUpperCase()); })
            .map((dataItem, index) => {
            return(
        <Col>
        <Card style={{ width: '9rem', borderRadius: '11px' }}>
          <Link to={`/movies/${dataItem.id}`}><Card.Img style={{ width: '9rem', borderRadius: '11px' }} variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${dataItem.poster_path}`}/></Link>
            <Card.Body>
                <Card.Title>{dataItem.original_title}</Card.Title>
                <Card.Text>
                   Click on the picture for more details 
                </Card.Text>
  
          </Card.Body>
      </Card>
      </Col>
            )
              });
        return (
            <div className="search-page">  
            <h1 className="search-header">Search Results</h1>
            <Container>                                                      
             <Row>                                                                  
                {searchResultsCards}
             </Row>
             </Container>
          </div>
        )
    }
}
export default withRouter(SearchPage);