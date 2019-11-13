import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import './card.css';

const RepoCard = ({ name, description, forks, language, stars }) => {
  return (
    <Row className='cardContainer'>
      <Col lg="10" xs="8">
        <Link className="repoName">
          <h4> {name} </h4>
        </Link>
        <div>
          <p className="repoDescription"> {description} </p>
        </div>
        <Row className="repoSubDetails">
          <Col>
            <p className='langauge'>{language}</p>
          </Col>
          <Col>
            <p className='stars'>{stars} Stars </p>
          </Col>
          <Col>
            <p className='forks'>{forks} Forks </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RepoCard;
