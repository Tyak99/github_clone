import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from "reactstrap";
import "./searchResult.css";
import Header from "../Header/Header";
import Card from "../common/Card";
import { Link } from "react-router-dom";

class SearchResult extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.user);
  }

  render() {
    let display = <div> Finding user.... </div>;
    if (this.props.users) {
      if (this.props.users.total_count > 0) {
        display = this.props.users.items.map(element => {
          return (
            <Card name={element.login} avatar_url={element.avatar_url}/>
          );
        });
      } else {
        display = <div> No user found :( </div>;
      }
    }
    return (
      <Fragment>
        <Header />
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
