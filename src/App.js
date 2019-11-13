import React, { Component } from "react";
import Home from "./Home/Home";
import SearchResult from "./Search/SearchResult";
import { Route, Link, Switch } from "react-router-dom";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParam: "",
      usersData: null,
      loading: false
    };
  }
  handleSubmit = (user) => {
    this.setState({ loading: true });
    Axios.get(`https://api.github.com/search/users?q=${user}`)
      .then(res => {
        console.log(res.data);
        this.setState({ usersData: res.data, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };
  handleInput = e => {
    this.setState({ searchParam: e.target.value });
  };
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { ...rest } = this.props;
    return (
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
            <SearchResult users={this.state.usersData} getUser={(user) => this.handleSubmit(user)} {...props} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
