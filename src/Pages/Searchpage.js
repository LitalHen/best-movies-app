
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