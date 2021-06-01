import React from 'react'
import {NavLink, Switch} from "react-router-dom";
import { Route } from 'react-router';
import {TMDBDiscover} from '../utils';
import Movies from './Movies';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import '../homePageStyle.css';
class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            moviesList:[],
            totalPages:1,
            currentPage:1

        }
    }

    setCurrentPage = (pageNum) =>{

        this.setState({
            currentPage:pageNum
        })

    }

    componentDidMount = () =>{
      
       TMDBDiscover({page:this.state.currentPage})
        .then((res)=>{
            if(res && res.results){
                const pages=res.total_pages;
                const movieObj= res.results.map((movie)=>{
                return{
                    movieId: movie.id,
                    title: movie.original_title,
                    laguage: movie.original_language,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                    rate:movie.vote_average,
                    //runTime:movie.with_runtime,
                    total_pages:movie.total_pages,
                    popularity:movie.popularity,
                    poster_path: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
                      }

               
                                    })

                    this.setState({
                            moviesList:movieObj,
                            totalPages:pages
                            })
                 }
                 console.log(this.state.moviesList)
            })
    }
    render(){

        return(
            <div>

      
                 {/* <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/#/">Disney Classics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <NavLink className="nav-bar" to="/movies">Movies</NavLink>
                      <NavLink to="/advanced-search"> Advanced Search</NavLink>
                      </Nav>
                  </Navbar.Collapse>
           </Navbar> */}

           <Container fluid className="top-remake-link">
               <Row className="row-link">
                   <Col className="col-link" xs={10} md={8} lg={4}>
                   <NavLink to="/top-rated">Top Rated</NavLink>
                   </Col>
                   <Col className="col-link" xs={10} md={8} lg={4}>
                   <NavLink to="/modified-classics">modified-classics</NavLink>
                   </Col>
               </Row>
                      
                     
               </Container>
            <Switch>
                <Route path="/modified-classics" >
                      <Movies/>    
                </Route>

                <Route path="/top-rated">
               
                </Route>

            </Switch>

        
            </div>

        )
    }
}

export default HomePage; 