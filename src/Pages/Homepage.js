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
                  <Container >
                     <Row> 
                    <Carosale/>
                         </Row> 
                   
                    <Movies 
                        showPaginator={false}
                        showSort={true}
                        galleryTitle=''
                    />
               </Container>

            </div>
        )
    }
}

export default HomePage; 