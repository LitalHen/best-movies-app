import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/Navbar-main';
import AdvancedSearch from './Pages/AdvancedSearch';


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
          <AdvancedSearch/>
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
