import React from "react";

import Man from "../imgs/man.png";

const About = () => {
  return (
    <div>
      <div className="about-intro">
        <div className="about-intro-text">
          <h1 className="about-title">
            Detail oriented, experienced professionals.
          </h1>
          <p>
            Our staff of detail oriented, experienced professionals are masters
            at navigating the complexities of healthcare and other benefit
            programs.{" "}
          </p>
          <p>
            {" "}
            Keeping up with constant changes in technology, markets and
            regulations is our job, and we gladly lend our knowledge and
            experience to hundreds of satisfied clients.
          </p>
          <p>
            This is the key to our success and to our client's profitability.
          </p>
          <a href="mailto:ebcgserv@ebcg.net" className="email">
            Email Us
          </a>
        </div>
        <img src={Man} className="about-img" />
      </div>
      <div className="info-area">
        <div className="info-area-text">
          <h1 className="text-area-title">Our Success Stories</h1>

          <p>
            Renewal negotiations for a particular client resulted in an annual
            premium savings of over $5,000,000 (group’s annual premium was
            $24,000,000).
          </p>
          <p>
            Renewal negotiations for a particular client resulted in an annual
            premium savings of over $850,000 (group’s annual premium was
            $4,600,000).
          </p>
          <p>
            Managed a survey project that included ten companies in the
            television industry. This survey covered the gamut of Health &
            Welfare and Retirement benefits.
          </p>
        </div>
        <div className="info-area-text">
          <h1 className="text-area-title">Our Profile</h1>

          <p>
            Our team includes extremely profit focused professionals with a
            proven track record in sales, coupled with an enthusiastic approach
            in developing a client following.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
