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
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <br></br>

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
