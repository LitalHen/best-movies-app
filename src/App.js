import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/Navbar-main';


function App() {
  return (
    <div>
      
      <HashRouter>
        <Route exact path={['/', '/movies', '/advanced-search']}>
          <MainNavbar/>
        </Route>
        <Route exact path={['/','/disney-classics','/disney-new']}>
          <Homepage/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
        <Route exact path="/advanced-search">

        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
