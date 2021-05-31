import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MovieThumbnail from '../components/MovieThumbnail';
import { DISNEY_ID } from '../constants';
import { TMDBDiscover } from '../utils';


class Movies extends React.Component {
    constructor(props){
        super(props);
        this.state={
            moviesList:[]

        }
    }
    
    componentDidMount = () =>{
        let pageNum=1;

        TMDBDiscover({page:pageNum})
        .then((res)=>{
            if( res && res.results){
            const movieObj= res.results.map((movie)=>{
                
                return{
                    title: movie.original_title,
                    laguage: movie.original_language,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                    rate:movie.vote_average,
                     runTime:movie.with_runtime,
                    total_pages:movie.total_pages,
                    popularity:movie.popularity,
                    poster_path: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
                      }

               
                                    })

                    this.setState({
                            moviesList:movieObj
                            })
                 }
                   
            })
    }
    render() {
        const movieCards =  this.state.moviesList.map((movie,id)=> {
           
           return (
        
            <Col key={id} lg={2} md={3} sm={6}>
           <MovieThumbnail
            id={id}
            poster_path={movie.poster_path}
            rate={movie.rate}
            title={movie.title}
            popularity={movie.popularity}
            releaseDate={movie.releaseDate}
            />
            </Col>
       
            )
        })
       
        return (
            <div >
              <Row mx={0}>
                {movieCards}
                </Row>
            </div>
        )
    }
  
}

export default Movies;