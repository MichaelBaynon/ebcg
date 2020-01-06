import React from "react";

const Contact = () => {
  return (
    <div className='contact-page-container'>
      <div className="contact-information">
        <h1>Contact Information</h1>
        <p>
          Telephone: <a href="tel:9544731034">954-473-1034</a>
        </p>
        <p>
          FAX: <a href="tel:9544731034">954-473-0146</a>
        </p>
      </div>
      <div className="mailing-address">
        <h1>Mailing address:</h1>
        <p>
          12525 Orange Dr. #703 <br></br>
          Davie, FL 33330
        </p>
      </div>
      <div className="Electronic Mail">
      <h1>Electronic Mail:</h1>
        <p>
          General Information:{" "}
          <a href="mailto:ebcgserv@ebcg.net" className="email-contact-page">
            Customer Service
          </a>
        </p>
        <p>
          Sales:{" "}
          <a href="mailto:consult@ebcg.net" className="email-contact-page">
            Senior Sales Consultant
          </a>
        </p>
        <p>
          Web Master:{" "}
          <a href="mailto:ebmaster@ebcg.net" className="email-contact-page">
            EBCGWebmaster
          </a>
        </p>
        <h1 className='call-soon'>Thank you for visiting our web site. Please call us soon.</h1>
      </div>
    </div>
  );
};

export default Contact;
