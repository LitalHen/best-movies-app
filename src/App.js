import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailesPage from './Pages/DetailesPage';

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

        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
