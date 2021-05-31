
// import { Card, ListGroup, Button, Form } from 'bootstrap-react';
import React from 'react';
import { Card, ListGroup, Button, Form  } from 'react-bootstrap';
import { TMDBDiscover } from '../utils';



class Searchpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchText:'',
            movieArray: [],
        };
    }


    setPage = (pageNum) => {
        TMDBDiscover({ page: pageNum })
        .then((res) => {return res.json()})
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

    //  to change page. passing the func a parameter 
    componentDidMount = () => { 
       this.setPage(1);
    }
     
    
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
        const arrayOfCards = this.state.movieArray.filter((obj) => { return obj.title.toUpperCase().includes(this.state.searchText.toUpperCase()); }).map((dataItem, index) => {
            return  <ListGroup.Item action key={index} onChange={()=> {dataItem.toUpperCase().includes(this.state.searchText.toUpperCase())}}>{dataItem.original_title}</ListGroup.Item>
        });
          // issue.issueTitle.toUpperCase()  title to upper case   . this.state.searchText.toUpperCase()  input from user to upper case (user search)
//   const filteredIssues = sortedIssues.filter((issue)=> issue.issueTitle.toUpperCase().includes(this.state.searchText.toUpperCase()));
//   const arrayOfCards = this.data.filter((dataItem, index) => {
//     return  <ListGroup.Item action key={index} onClick={()=> this.resultSelected(index)}>{dataItem.name}</ListGroup.Item>
//     })

        return (
            <div className="search-box">                                                        
            {/* ?? if   this.props.placeholder  is undefined will show text "Please remember to pass props"*/}
         <Form.Control onChange={this.updateText} value={this.state.searchText} placeholder={this.props.placeholder ?? "Please remember to pass props"}/>
            <ListGroup>                                                                     
                {arrayOfCards}
            </ListGroup>


                   Searchpage <br></br><br></br>
      
            <br></br><br></br>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button onClick={() => { const pageValue = prompt("Please enter page number"); this.setPage(pageValue);  }}>Change Page</Button>
                  </Card.Body>
              </Card>
          </div>
        )
    }
    
}

export default Searchpage;