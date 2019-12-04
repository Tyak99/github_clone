import React, {useState} from "react";
import { Button, FormGroup, Input, Container, Row, Col } from "reactstrap";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchParam, setSearchParam] = useState("");

  const handleInput = e => {
    setSearchParam(e.target.value)
  };

  return (
    <div>
      <Container style={{ marginTop: "12%" }}>
        <Row>
          <Col sm="6" xs="12">
            <h1 className="headerText"> Github users listing</h1>
            <p className="descriptionText">
              Search through github users and peep at their profile :)
            </p>
            <Row>
              <Col sm="8" xs="12">
                <FormGroup className="searchInput">
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Find a Github User"
                    bsSize="lg"
                    onChange={handleInput}
                  />
                </FormGroup>
              </Col>
              <Col sm="4" xs="12">
                <Link to={`/search-result/${searchParam}`}>
                  <Button
                    style={{ backgroundColor: "#34CABE", border: 0 }}
                    size="lg"
                    className="btn-search"
                  >
                    Search
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col sm="6" xs="12" className="searchImage">
            <img
              src="/search.png"
              alt=""
              style={{ width: "100%", height: 400 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
