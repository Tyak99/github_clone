import React from "react";
import { Row, Col, Button } from "reactstrap";
import './card.css';

const Card = ({ name, avatar_url }) => {
  return (
      <Row style={{borderTop: '1px solid black', padding: '0.5rem 0'}}>
        <Col lg="10" xs='8'>
          <h4 className="name"> {name} </h4>
          <div>
            <Button> View profile </Button>
          </div>
        </Col>
        <Col lg="2" xs='4' style={{flexStart: 'flex-end'}}>
          <img src={avatar_url} alt="" style={{ width: 100, height: 100 }} />
        </Col>
      </Row>
  );
};

export default Card;
