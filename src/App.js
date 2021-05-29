import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../src/components/Home/Home'
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';



function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore/:id'>
            <Details></Details>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>

  )

}

export default App;
