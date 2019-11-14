import React, { Component } from "react";
import Home from "./Home/Home";
import SearchResult from "./Search/SearchResult";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import Profile from "./Profile/Profile";
import Header from "./common/Header/Header";
import NotFound from "./common/NotFound";
import parse from 'parse-link-header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParam: "",
      usersData: null,
      loading: false,
      pagination: null
    };
  }
  handleSubmit = (user, url) => {
    this.setState({ loading: true });
    const requestUrl = user === null ? url : `https://api.github.com/search/users?q=${user}`
    Axios.get(requestUrl)
      .then(res => {
        const parsed = parse(res.headers.link)
        this.setState({ usersData: res.data, loading: false, pagination: parsed });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };
  handleInput = e => {
    this.setState({ searchParam: e.target.value });
  };

  render() {
    const { ...rest } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                users={this.state.usersData}
                loading={this.state.loading}
                input={this.state.searchParam}
              />
            )}
          />
          <Route
            path="/search-result/:user"
            {...rest}
            render={props => (
              <SearchResult
                users={this.state.usersData}
                getUser={(user, url) => this.handleSubmit(user, url)}
                pagination={this.state.pagination}
                {...props}
              />
            )}
          />
          <Route path="/profile/:name" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
