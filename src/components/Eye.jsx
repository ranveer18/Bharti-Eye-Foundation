import React from "react";
import Eyecard from "./Eyecard";

const Eye = () => {
  return (
    <>
      <div className="eyecontainer">
        <h1>Know Your Eye</h1>
        <div className="eyecontainer_cards">
          <Eyecard />
          <Eyecard />
          <Eyecard />
          <Eyecard />
          <Eyecard />
          <Eyecard />
        </div>
      </div>
    </>
  );
};

export default Eye;
