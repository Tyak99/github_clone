import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./card.css";

const UserCard = ({ name, avatar_url }) => {
  return (
    <Row className='cardContainer'>
      <Col lg="10" xs="8">
        <Link to={`/profile/${name}/repos`}>
          <h4 className="username"> {name} </h4>
        </Link>
        <div>
          <Link to={`/profile/${name}/repos`}>
            <Button style={{ backgroundColor: "#34CABE", border: 0 }}>
              View profile
            </Button>
          </Link>
        </div>
      </Col>
      <Col lg="2" xs="4">
        <img src={avatar_url} alt="" style={{ width: 100, height: 100 }} />
      </Col>
    </Row>
  );
};

export default UserCard;
