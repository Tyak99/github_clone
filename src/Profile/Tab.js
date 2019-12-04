import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "../common/UserCard";
import RepoCard from "../common/RepoCard";


const Tab = ({match, user}) => {
  const [userData, setUserData] = useState();
  const [repoData, setRepoData] = useState();

  useEffect(() => {
    const { params } = match;
    if(user.login) {
      Axios.get(`https://api.github.com/users/${user.login}/${params.tab}`)
        .then(res => {
          console.log(res.data);
          if (params.tab === "repos" || params.tab === "starred") {
            setRepoData(res.data)
            setUserData();
          } else {
            setUserData(res.data);
            setRepoData();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },[match, user.login]);

  let display;
  if (userData) {
    display = userData.map(element => {
      return <Card name={element.login} avatar_url={element.avatar_url} key={element.id}/>;
    });
  } else if (repoData) {
    display = repoData.map(element => {
      return (
        <RepoCard
          name={element.full_name}
          description={element.description}
          language={element.language}
          forks={element.forks_count}
          stars={element.stargazers_count}
          key={element.id}
        />
      );
    });
  }
  return <div>{display}</div>;
}

export default Tab;
