
// import { Card, ListGroup, Button, Form } from 'bootstrap-react';
import React from 'react';
import { Card, ListGroup, Button, Form  } from 'react-bootstrap';


class Searchpage extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount = () => {     // put change text var instead of adam
        fetch("https://api.themoviedb.org/3/search/movie?api_key=1ee3645441ba4ed79b9da803ead5ce9a&query=adam")
        .then((res) =>  res.json())          
        .then(data =>  console.log(data))
         .catch((err) => {
            alert('the ajax call has failed')
            console.log(err)
          })
      }
    



    render() {
        return (
            <div >
                   Searchpage <br></br><br></br>
                 <Form.Control />
            <ListGroup>
            list of search result here
            </ListGroup>
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
                  </Card.Body>
              </Card>
          </div>
        )
    }
    
}

export default Searchpage;