import React from 'react';
import Home from './Home/Home';
import SearchResult from './Search/SearchResult';
import { Route, Link, Switch } from "react-router-dom";
const App = () => {
  return (
    <Switch> 
      <Route path='/' exact component={Home}/>
      <Route path='/search-result' component={SearchResult}/>
    </Switch>
  );
}

export default App;
