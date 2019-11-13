import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Route } from "react-router-dom";
import "./profile.css";
import Card from "../common/UserCard";
import Axios from "axios";
import Tab from "./Tab";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };
  }
  componentDidMount() {
    console.log("I mounted");
    const { name } = this.props.match.params;
    Axios.get(`https://api.github.com/users/${name}`)
      .then(res => {
        this.setState({ userData: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      const { name } = this.props.match.params;
      Axios.get(`https://api.github.com/users/${name}`)
        .then(res => {
          this.setState({ userData: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const {
      avatar_url,
      name,
      login,
      company,
      bio,
      location
    } = this.state.userData;
    const { url } = this.props.match;
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
                  Repositories
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
              path={`${this.props.match.url}/:tab`}
              render={props => (
                <Tab userData={this.state.userData} {...props} />
              )}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
