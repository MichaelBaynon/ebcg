import React from "react";

import Presentation from "../imgs/presentation.jpg";

const Home = () => {
  return (
    <div>
      <div className="call-to-action-container">
        <div className="call-to-action-text">
          <h1>We go beyond standard solutions.</h1>
          <p>
            Employee Benefits Consulting Group can help you design a plan that
            makes sense for your company.
          </p>
          <div className='phone-number'>
            Call: <p> 123-456-0676</p>
          </div>
        </div>
        <img src={Presentation} className="presentation-img" />
      </div>
    </div>
  );
};

export default Home;
