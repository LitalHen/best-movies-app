import React from 'react'
import { Nav, Navbar, Button, Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'
import { TMDBsearch } from '../utils';
import Searchpage from './SearchBox';
import SearchBox from './SearchBox';

class MainNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
        }
    }

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


    goToSearchPage = () =>{
        const searchText = this.state.searchText;
        
        //pass to search page
    } 

    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="d-flex " href="/#/">
                    <div className="logo-img">
                        <img src="https://i.pinimg.com/originals/5f/8a/85/5f8a85054562d812b4f3ed841d720550.png"/>
                    </div> 
                    Disney Movies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-bar" to="/movies/new">Newest</NavLink>
                        <NavLink className="nav-bar" to="/movies/best">Best movies</NavLink>
                        <NavLink to="/advanced-search"> Advanced Search</NavLink>
                    </Nav>
                    <Nav className="right">
                        <SearchBox >
                        </SearchBox>
                     
                        {/* <Form.Control onChange={this.updateText} value={this.state.searchText} placeholder={"Please enter your query"}/> */}
                        {/* <Button onClick={this.goToSearchPage}>Search</Button> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        )
    }
}

export default MainNavbar;
