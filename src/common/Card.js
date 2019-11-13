import React from "react";
import { Row, Col } from "reactstrap";
const Card = props => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        width: "80%",
        padding: "0.5rem 0"
      }}
    >
      <Row>
        {props.children}
      </Row>
    </div>
  );
};

export default Card;
