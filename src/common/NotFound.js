import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>404</h2>
      <h4> This page you are looking for does not exist... yet </h4>
      <p>
        Return <Link to="/"> Home </Link>
      </p>
    </div>
  );
};

export default NotFound;
