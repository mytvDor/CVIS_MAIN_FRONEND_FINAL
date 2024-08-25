import React from "react";
import { Image, Button } from "antd";
import "../servicepages/index.css";
import Navbar from "../../attributes/Navbar";
import { useNavigate } from "react-router-dom";

const AndroidDevPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text wblock animate-down">
          <h1 className="texth1">Integration</h1>
          <br></br>
          <h3>About</h3>
          <br></br>
          <li>
            <strong>MuleSoft Integration</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            MuleSoft Anypoint Platform, APIs, Connectors
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Enterprise application integration, API management
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Leveraging MuleSoft's Anypoint Platform to connect and integrate
            various enterprise systems and applications. Provides robust API
            management, seamless data integration, and real-time analytics.
            Ideal for organizations looking to unify their technology stack and
            streamline operations through a scalable and flexible integration
            solution.
          </li>
          <br></br> <br></br>
          <li>
            <strong>API Management and Design</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            MuleSoft API Designer, RAML, OAS
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            API design, documentation, and governance
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Design, document, and manage APIs using MuleSoft's tools.
            Facilitates the creation of well-structured APIs that are easy to
            integrate and maintain. Supports API governance and documentation to
            ensure consistency and compliance across your API ecosystem.
          </li>
          <br />
          <br />
          <button className="enqbtn" onClick={handleNavigate}>
            Enquiry
          </button>
          <br />
        </div>
      </div>
      <div className="button-container"></div>
    </>
  );
};

export default AndroidDevPage;
