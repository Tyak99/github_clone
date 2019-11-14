import React from "react";
import {
  Button,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import "./home.css";
import { Link } from "react-router-dom";

const Home = ({handleInput, handleSubmit, loading, input}) => {
  return (
    <div>
      <Container style={{ marginTop: "12%" }}>
        <Row>
          <Col>
            <h1 className="headerText"> Github users listing</h1>
            <p className="descriptionText">
              Search through github users and peep their profile :)
            </p>
            <Row>
              <FormGroup>
                <Col>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Find a Github User"
                    bsSize="lg"
                    onChange={handleInput}
                  />
                </Col>
              </FormGroup>
              <Col>
                <Link to={`/search-result/${input}`}>
                  <Button
                    style={{ backgroundColor: "#34CABE", border: 0 }}
                    size="lg"
                  >
                    Search
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <img src="/search.png" alt="" style={{ width: 600, height: 400 }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
