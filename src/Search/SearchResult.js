import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import "./searchResult.css";
import Header from "../Header/Header";
import Card from "../common/Card";

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container className="ph-5">
          <Row>
            <Col xs="3">
              <div className="resultType">
                <a href="">Users</a>
              </div>
            </Col>
            <Col>
              <h3 className="resultAmount"> 200 users</h3>
              <Card>
                <Col>
                  <a href="">Tunde </a>
                  <p>
                    I'm a solutions architect at AWS and prior to that
                    co-founded Entelo. Interested in renewable energy, media,
                    and democracy.
                  </p>
                </Col>
                <Col xs="3">
                  <img
                    src="/logo192.png"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </Col>
              </Card>
              <Pagination aria-label="Page navigation example">
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchResult;
