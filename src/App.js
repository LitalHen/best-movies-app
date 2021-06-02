import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/Navbar-main';
import SearchPage from './Pages/SearchPage';


function App() {

  return (
    <div>
      
      <HashRouter>
      <MainNavbar/>
        
        <Route exact path={['/','/disney-classics','/disney-new']}>
          <Homepage/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
        <Route exact path="/advanced-search">

        </Route>
        <Route exact path="/search-page/:text">
        <SearchPage></SearchPage>
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
