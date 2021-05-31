import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const APIKEY = '33218e90fc0df5359112eb4597322c1c'; 


class MovieThumbnail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          moviesData:[]
        }
       
    }

      
    componentDidMount = () =>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=5391`)
        .then( (stream) => stream.json())
        .then((res) => {  
              const newResults = res.results.map((res,index)=>
              {
                return{ title: res.title,
                            image: res.poster_path,
                            runtime: res.runtime,
                            company: res.production_companies,
                            popularity:res.popularity,
                            year:res.release_date}
              }
              )
              this.setState({
                        moviesData:newResults
                    })

        })
      
}
        render(){
         
            console.log(this.state.moviesData)
            const movieCards =  this.state.moviesData.map((movie,id)=> {
                return <Col lg={2} md={3} sm={6}>
                         <Card key={id}>
                            {/* <Link to={`/movies/${movie.id}`}> */}
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185/${movie.image}`} />
                        {/* </Link>     */}
                        <h5>{movie.title}</h5>         
              <div> {movie.runtime}</div>
              <div> {movie.company}</div>
              <div> {movie.popularity}</div>
              <div> {movie.year}</div>
                    </Card>
                    </Col> 
 })
           
                return(
                <div className='p-movies-page'>
                    <Row>
                    {movieCards}
                    </Row>
                </div>
                )
            }
        }
export default MovieThumbnail;      