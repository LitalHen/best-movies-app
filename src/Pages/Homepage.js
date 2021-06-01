import React from 'react'
import {NavLink, Switch} from "react-router-dom";
import { Route } from 'react-router';
import {TMDBDiscover} from '../utils';
import { Col, Container, Row } from 'react-bootstrap';
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
        this.choosePage(pageNum)
    }

    choosePage = (pageNum) => {
        TMDBDiscover({page: pageNum})
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
        })
    }

    componentDidMount = () =>{
       this.choosePage(this.state.currentPage)
    }

    render(){
        return(
            <div>
                <Container fluid className="top-remake-link">
                    <Row className="row-link">
                        <Col className="col-link" xs={10} md={8} lg={4}>
                            <NavLink to="/disney-classics">Disney Classics</NavLink>
                        </Col>
                        <Col className="col-link" xs={10} md={8} lg={4}>
                            <NavLink to="/disney-new">New Disney Movies</NavLink>
                        </Col>
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