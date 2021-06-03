import React from 'react'
import {NavLink, Switch} from "react-router-dom";
import { Route } from 'react-router';
import {TMDBDiscover, useTMDBDiscover} from '../utils'; 
import { Col, Container, Row } from 'react-bootstrap';

import Movies from './Movies';
import { Link } from 'react-router-dom';
import Carosale from '../carosale/Carosale';


class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            moviesList:[],
            totalPages:1,
            currentPage:1
        }
    }

    render(){
        return(
            <div>
                <Carosale/>
                        <Movies 
                        showPaginator={false}
                        showSort={true}
                        galleryTitle=''
                    />
                <Container fluid className="top-remake-link">

                    <Row className="row-link">
                    <Row className="row-link text-center">
                        <Col className="col-link" xs={10} md={8} lg={4}>
                            <NavLink to="/disney-classics">Disney Classics</NavLink>
                        </Col>
                        <Col className="col-link" xs={10} md={8} lg={4}>
                            <NavLink to="/disney-new">New Disney Movies</NavLink>
                        </Col>
                    </Row> 
                    </Row>      
     
                </Container>

                <Switch>
                    <Route path="/disney-classics" >
                        Disney Classics
                    </Route>
                    <Route path="/disney-new">
                        New Disney Movies
                    </Route>
                </Switch>

            </div>
        )
    }
}

export default HomePage; 