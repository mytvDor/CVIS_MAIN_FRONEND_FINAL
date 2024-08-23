// import React, { Component } from "react";
// import { Image, Button } from "antd";
// import "../servicepages/index.css";
// import Navbar from "../../attributes/Navbar";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// class androiddevpage extends Component {
//   render() {
//     return (
//       <>
//         <Navbar></Navbar>
//         <div className="container">
//           {/* <div className="image wblock">
//             <Image src="https://static.wixstatic.com/media/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg" />
//           </div> */}
//           <div className="text wblock animate-down">
//             <h1 className="texth1"> Application Development</h1>
//             <h3>About</h3>

//             <li>hi</li>
//             <li>hi</li>
//             <li>hi</li>
//             <li>hi</li>
//             <li>hi</li>

//             <button className="enqbtn" onClick={() => navigate("/contact")}>
//               Enquiry
//             </button>
//             <br />
//             {/* <Button className="btn1" href="#">
//               Previous
//             </Button>
//             <Button className="btn2" href="#">
//               Next
//             </Button> */}
//           </div>
//         </div>
//         <div className="button-container">
//           {/* <Button className="btn1" href="#">
//             Previous
//           </Button>
//           <Button className="btn2" href="#">
//             Next
//           </Button> */}
//         </div>
//       </>
//     );
//   }
// }

// export default androiddevpage;
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
          <h1 className="texth1">Application Development</h1>
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
