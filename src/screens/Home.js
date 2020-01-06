import React, { useState } from "react";

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
          <div className="phone-number">
            Call: <a href="tel:9544731034">954-473-1034</a>
          </div>
        </div>
        <img src={Presentation} className="presentation-img" />
      </div>
      <div className="info-area">
        <div className="info-area-text">
          <h1 className="text-area-title">How do we help you?</h1>

          <p>
            {" "}
            Working with your financial and human resources departments,
            Employee Benefits Consulting Group can help you design a plan that
            makes sense for your company.
          </p>
          <p>
            {" "}
            We design plans that incorporate multiple plan options, flex
            credits, wellness and preventive health care, as well as
            alternatives to save money and control costs.
          </p>
          <p>
            {" "}
            We will explore the feasibility of a flex plan, design and market
            the plan, perform all the necessary actuarial studies for pricing
            and credit methodologies, and implement and communicate the plan
            efficiently and effectively to your workforce.
          </p>
        </div>
        <div className="info-area-text">
          <h1 className="text-area-title">We add value to your company.</h1>

          <p>
          We help you see the bigger picture, give you more creative solutions. We balance high-tech with high-touch.
          </p>
          <p>
          We offer more outsourcing support than anyone.  And we offer more flexibility in how we set fees and implement them.
          </p>
          <p>
          In short, we leverage our expertise and resources to "redefine benefit consulting" and deliver maximum value for your benefit dollar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
