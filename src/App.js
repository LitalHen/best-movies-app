import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import Constants from './Constants';

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
        <Route exact path="/advanced-search">

        </Route>

      </HashRouter>
      <Constants/>
    </div>
  );
}

export default App;
