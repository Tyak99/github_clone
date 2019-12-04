import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Route } from "react-router-dom";
import "./profile.css";
import Axios from "axios";
import Tab from "./Tab";

const Profile = ({ match }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const name = match.params.name
    Axios.get(`https://api.github.com/users/${name}`)
      .then(res => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [match.params.name]);

  const { avatar_url, name, login, company, bio, location } = userData;
  const { url } = match;

  return (
    <Container className="ph-5">
      <Row>
        <Col sm="3" xs="6">
          <div className="profileImage">
            <img src={avatar_url} alt="profile" />
          </div>
          <div className="profileName">
            <h4> {name} </h4>
            <p> {login} </p>
          </div>
          <div className="profileDescription">
            <p className="bio"> {bio} </p>
            <strong>
              <p className="company"> {company} </p>
            </strong>
            <p className="location"> {location} </p>
          </div>
        </Col>
        <Col sm="9" xs="12">
          <Row className="links">
            <Col>
              <NavLink
                to={`${url}/repos`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Repositories <span></span>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                to={`${url}/starred`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Stars
              </NavLink>
            </Col>
            <Col>
              <NavLink
                to={`${url}/followers`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Followers
              </NavLink>
            </Col>
            <Col>
              <NavLink
                to={`${url}/following`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Following
              </NavLink>
            </Col>
          </Row>
          <Route
            path={`${url}/:tab`}
            render={props => <Tab user={userData} {...props} />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
