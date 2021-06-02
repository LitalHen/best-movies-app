import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { TMDBsearch } from '../utils';
import './pages.css'

class AdvancedSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            genreList: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=8d1b15ab645ee49f624b9cee8920214c&language=en-US')
        const genreData = await res.json()
        let genreName = []
        await genreData.genres.map(genre => {
            genreName.push(<option>{genre.name}</option>)
        })
        this.setState({
            genreList: genreName
        })
    }

    getAdvancedSearchResults = async () => {
        const res = await TMDBsearch(5)
        console.log(res)

    }

    render(){
        const yearList = [];
        const currentYear = new Date().getFullYear();
        for(let i = currentYear; i >= currentYear - 120; i--){
            yearList.push(<option>{i}</option>)
        }
        return (
            <div>
                <Container>
                    <Form className="mt-4">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="From Year">
                                <option>From Year</option>
                                {yearList}
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="To Year">
                                <option>To Year</option>
                                {yearList}
                                
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="Genere">
                                <option>Genere</option>
                                {this.state.genreList}
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
                        <Button onClick={this.getAdvancedSearchResults} className="advanced-search-btn" variant="primary" type="submit">
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