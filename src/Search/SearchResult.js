import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Container,
} from "reactstrap";
import "./searchResult.css";
import { Link } from "react-router-dom";
import UserCard from "../common/UserCard";

class SearchResult extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.user);
  }

  render() {
    let display = <div>Searching... </div>;
    if (this.props.users) {
      if (this.props.users.total_count > 0) {
        display = this.props.users.items.map(element => {
          return (
            <UserCard name={element.login} avatar_url={element.avatar_url} key={element.id}/>
          );
        });
      } else {
        display = <div> No user found :( </div>;
      }
    }
    return (
      <Fragment>
        <Container className="ph-5">
          <Row>
            <Col lg="3" xs='6'>
              <div className="resultType">
                <h4> Users <span style={{float: 'right'}}> {this.props.users && this.props.users.total_count} </span></h4>
              </div>
              <Link to='/'> Search Again </Link>
            </Col>
            <Col lg='8' xs='12'>
              {display}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchResult;
