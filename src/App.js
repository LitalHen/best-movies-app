import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailesPage from './Pages/DetailesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/Navbar-main';
import SearchPage from './Pages/SearchPage';
import AdvancedSearch from './Pages/AdvancedSearch';

function App() {

  return (
    <div>
      {/*/this.movieId = this.props.match.params.movieId;*/}

      <HashRouter>
        <Route exact path="/movies/:movieId">
          <DetailesPage></DetailesPage>
        </Route>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
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
}

export default App;
