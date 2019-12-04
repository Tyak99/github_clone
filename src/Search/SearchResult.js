import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./searchResult.css";
import { Link } from "react-router-dom";
import UserCard from "../common/UserCard";
import Paginate from "../common/Pagination";
import Axios from "axios";
import parse from "parse-link-header";

const SearchResult = props => {
  const [usersData, setUserData] = useState();
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(false);

  const getUser = (user, url) => {
    setLoading(true);
    const requestUrl =
      user === null ? url : `https://api.github.com/search/users?q=${user}`;
    Axios.get(requestUrl)
      .then(res => {
        const parsed = parse(res.headers.link);
        setLoading(false);
        setUserData(res.data);
        setPagination(parsed);
      })
      .catch(error => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const user = props.match.params.user;
    getUser(user);
  }, [props.match.params.user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [usersData]);

  let display = <div>Searching... </div>;
  if (usersData) {
    if (usersData.total_count > 0) {
      display = usersData.items.map(element => {
        return (
          <UserCard
            name={element.login}
            avatar_url={element.avatar_url}
            key={element.id}
          />
        );
      });
    } else {
      display = (
        <div className="invalidUser">
          <h5>
            Sorry :( We couldn't find any user matching '
            {props.match.params.user}'
          </h5>
          <p>
            You can <Link to="/"> Search again </Link>
          </p>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <Container className="ph-5">
        <Row>
          <Col lg="3" xs="6">
            <div className="resultType">
              <h4>
                Users
                <span style={{ float: "right" }}>
                  {usersData && usersData.total_count}
                </span>
              </h4>
            </div>
          </Col>
          <Col lg="8" xs="12">
            {display}
            {pagination && (
              <Paginate pagination={pagination} getUser={getUser} />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SearchResult;
