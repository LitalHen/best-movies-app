import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'

class MainNavbar extends React.Component{
    constructor(props){
        super(props)
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
                        <NavLink className="nav-bar" to="/movies">Movies</NavLink>
                        <NavLink to="/advanced-search"> Advanced Search</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        )
    }
}

export default MainNavbar;
