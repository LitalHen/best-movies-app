import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsPage from './Pages/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/Navbar-main';
import SearchPage from './Pages/Searchpage';
import AdvancedSearch from './Pages/AdvancedSearch';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isLoading:true
    }
  }
  isLoading=()=>{

  }

  render(){
  return (
    <div>

     <HashRouter>
        <MainNavbar></MainNavbar>
        <Route exact path="/movies/:movieId">
          <DetailsPage></DetailsPage>
        </Route>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/new">

          <Movies 
          showPaginator={true}
          showSort={false}
          galleryTitle='New movies'
          sortByDefault='release_date.desc'/>
        </Route>
        <Route exact path="/best">
          <Movies 
          showPaginator={true}
          showSort={false}
          galleryTitle='Best movies'
          sortByDefault='vote_average.desc'/>
        </Route>
        <Route exact path="/advanced-search">
          <AdvancedSearch/>
        </Route>
        <Route exact path="/search-page/:text">
          <SearchPage></SearchPage>
        </Route>

      </HashRouter>
    </div>
  );
}}

export default App;
