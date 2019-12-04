import React from 'react';
import { Route, Switch } from "react-router";
import Home from '../Home/Home';
import SearchResult from '../Search/SearchResult';
import Profile from '../Profile/Profile';
import NotFound from './NotFound';

const Routes = () => {
    return (
        <Switch> 
            <Route path='/' exact component={Home}/>
            <Route  path="/search-result/:user" component={SearchResult}/>
            <Route path="/profile/:name" component={Profile} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes;