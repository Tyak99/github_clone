import React from "react";
import Header from "./common/Header/Header";
import Routes from "./common/Routes";

const App = ({ ...rest }) => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
};

export default App;
