import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import "./home.css";
import  Header from "../Header/Header";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchParam: ''
    };
  }

  handleTextInput = (e) => {
      this.setState({searchParam: e.target.value})
  }
  handleSearch = () => {
      // call the github api
      // get the result here
  }
  render() {
    return (
      <div style={{marginTop: '20%'}}>
        <Header />
        <Container>
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
                      onChange={this.handleTextInput}
                    />
                  </Col>
                </FormGroup>
                <Col>
                  <Button
                    style={{ backgroundColor: "#34CABE", border: 0 }}
                    size="lg"
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
                <img src="/search.png" alt="" style={{width: 600, height: 400}}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
