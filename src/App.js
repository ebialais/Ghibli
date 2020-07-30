import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Layout/Home';
import Films from './Layout/Films';
import FilmItem from './Components/FilmItem';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='Films'>Films</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact render={()=><Home />} />
        <Route path='/Films' exact render={()=><Films />} />
        <Route path='/Films/:id' exact component={ FilmItem } />
      </Switch>
    </Router>
  );
}

export default App;
