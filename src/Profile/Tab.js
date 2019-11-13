import React, { Component } from "react";
import Axios from "axios";
import Card from "../common/UserCard";
import RepoCard from "../common/RepoCard";

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      repoData: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match !== this.props.match) {
      const { userData, match } = this.props;
      const { params } = match;
      Axios.get(`https://api.github.com/users/${userData.login}/${params.tab}`)
        .then(res => {
          console.log(res.data);
          if (params.tab === "repos" || params.tab === "starred") {
            this.setState({ repoData: res.data, userData: null });
          } else {
            this.setState({ userData: res.data, repoData: null });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    let display;
    if (this.state.userData) {
      display = this.state.userData.map(element => {
        return <Card name={element.login} avatar_url={element.avatar_url} />;
      });
    } else if (this.state.repoData) {
      display = this.state.repoData.map(element => {
        return (
          <RepoCard
            name={element.full_name}
            description={element.description}
            language={element.language}
            forks={element.forks_count}
            stars={element.stargazers_count}
          />
        );
      });
    }
    return <div>{display}</div>;
  }
}

export default Tab;
