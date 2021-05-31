import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';

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

      </HashRouter>
    </div>
  );
}

export default App;
