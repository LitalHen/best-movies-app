import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import Searchpage from './Pages/Searchpage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <HashRouter>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
        <Route exact path="/advanced-search">

        </Route>
        <Route exact path="/search-page">
        <Searchpage></Searchpage>
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
