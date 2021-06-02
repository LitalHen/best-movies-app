import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { TMDBsearch } from '../utils';
import './pages.css'

class AdvancedSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            moviesArr: []
        }
    }

    componentDidMount = (pageNum) => {
        TMDBsearch({page:pageNum})
        .then(res => {
            console.log(res)
            this.setState({
                moviesArr: res
            })
        })
    }

    

    render(){
        return (
            <div>
                <Container>
                    <Form className="mt-4">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="From Year">
                                <option>From Year</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="To Year">
                                <option>To Year</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="Genere">
                                <option>Genere</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="Min Rating">
                                <option>Min Rating</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="Min Votes">
                                <option>Min Votes</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <div className="d-flex justify-content-center">
                        <Button className="advanced-search-btn" variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default AdvancedSearch;