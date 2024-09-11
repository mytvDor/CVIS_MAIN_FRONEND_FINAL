import React from "react";
import "../home/Steps.css";
const Steps = () => {
  return (
    <div>
      {/* <h1>OL circle cards</h1> */}
      <ol>
        <li className="animate-left">
          <div className="icon">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div className="title ">Consult</div>
          {/* <div className="descr">Consult</div> */}
        </li>
        <li className="animate-right">
          <div className="icon">
            <i className="fa-solid fa-calendar-alt"></i>
          </div>
          <div className="title">Plan</div>
          {/* <div className="descr">Plan</div> */}
        </li>
        <li className="animate-left">
          <div className="icon">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="title">Design</div>
          {/* <div className="descr">Design</div> */}
        </li>
        <li className="animate-right">
          <div className="icon">
            <i className="fa-solid fa-laptop-code"></i>
          </div>
          <div className="title">Develop</div>
          {/* <div className="descr">Develop</div> */}
        </li>
        <li className="animate-left">
          <div className="icon">
            <i className="fa-solid fa-clipboard-check"></i>
          </div>
          <div className="title">Test</div>
          {/* <div className="descr">Test</div> */}
        </li>
        <li className="animate-right">
          <div className="icon">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <div className="title">Deploy</div>
          {/* <div className="descr">Deploy</div> */}
        </li>
      </ol>
    </div>
  );
};

export default Steps;
