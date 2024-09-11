// import "./Home.css";
// import Cards from "./allCards/Cards";
// import FeedForm from "../home/bookDemo/FeedForm";
// import BookDemo from "./bookDemo/BookDemo";
// import Main_slider from "./slider/main_slider";
// import Ourfeedback from "./ourfeed/ourfeedback";
// import CardBrochure from "./allCards/CardBrochure";
// import Navbar from "../attributes/Navbar";
// // import { Steps } from "antd";
// import Steps from "./Steps";

// function Home() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <Main_slider />
//       <div className="cardsFlow" style={{ width: "100%" }}>
//         {" "}
//         <Cards />
//         <div className="mission">
//           <h1>YOUR VISION OUR SOLUTION</h1>
//         </div>
//         <Steps></Steps>
//         <CardBrochure />
//       </div>
//       <FeedForm />
//       {/* <BookDemo /> */}
//       {/* <Ourfeedback /> */}
//     </>
//   );
// }

// export default Home;
import "./Home.css";
import Cards from "./allCards/Cards";
import FeedForm from "../home/bookDemo/FeedForm";
import BookDemo from "./bookDemo/BookDemo";
import Main_slider from "./slider/main_slider";
import Ourfeedback from "./ourfeed/ourfeedback";
// import CardBrochure from "./allCards/CardBrochure";
import Navbar from "../attributes/Navbar";
import Steps from "./Steps";
import Testimonials from "./allCards/Testimonials";
import Hero from "./Hero.jpg";
import { useNavigate } from "react-router-dom";
import Computer from "./Computer";
import PriceCard from "./allCards/PriceCard";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const styleSheet = document.styleSheets[0];
  //   const keyframes = `
  //     @keyframes bgAnimation {
  //       0% { background-position: 0% 50%; }
  //       50% { background-position: 100% 100%; }
  //       100% { background-position: 0% 50%; }
  //     }`;

  //   // Insert keyframes at the end of the stylesheet
  //   styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  // }, []);
  useEffect(() => {
    // Create a new <style> element
    const style = document.createElement("style");
    style.type = "text/css";
    const keyframes = `
      @keyframes bgAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 50%; }
      }`;
    
    // Append the keyframes to the <style> element
    style.appendChild(document.createTextNode(keyframes));
    
    // Append the <style> element to the document head
    document.head.appendChild(style);

    // Clean up the <style> element on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <Navbar></Navbar>

      {/* <Main_slider /> */}
      {/* <main>
        <div className="container">
          <div>
            {" "}
            <img src={Hero} alt="Hero" />
          </div>{" "}
          <div className="hero-text">
            <h1>Elevate Your Business with Advanced Software Technologies</h1>
            <p>
              Transform your operations and achieve greater efficiency with our
              state-of-the-art software solutions. Join us in shaping the future
              of your business.
            </p>
            <button onClick={() => navigate("/contact")}>Contact Us</button>{" "}
          </div>
        </div>
      </main> */}

      <main style={{ padding: "30px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Background Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -10,
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              backgroundImage:
                "linear-gradient(to right, rgba(143, 142, 142, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 142, 142, 0.5) 1px, transparent 1px)",
              backgroundSize: "6rem 4rem",
            }}
          ></div>
          <div>
            <img src={Hero} alt="Hero" />
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Spot Color Behind Text */}
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "20px",
                height: "300px",
                width: "300px",
                borderRadius: "50%",
                backgroundColor: "#00a8c5",
                opacity: 0.4,
                filter: "blur(110px)",
                zIndex: -1, // Behind the text but above the grid
                overflow: "hidden",
              }}
            ></div>

            {/* Text Content */}
            <div className="hero-text" style={{ position: "relative" }}>
              <h1>Elevate Your Business with Advanced Software Technologies</h1>
              <p>
                Transform your operations and achieve greater efficiency with
                our state-of-the-art software solutions. Join us in shaping the
                future of your business.
              </p>
              <button onClick={() => navigate("/contact")}>Contact Us</button>
            </div>
          </div>
        </div>
      </main>

      <div className="cardsFlow " style={{ width: "100%" }}>
        <div style={{ height: "auto" }}>
          {" "}
          <PriceCard></PriceCard>
        </div>{" "}
        <Cards />
        <div className="mission">
          <h1
            className="animated fadeIn animate-down"
            style={{ color: "#0a5a96" }}
          >
            YOUR VISION OUR SOLUTION
          </h1>
        </div>
        <Steps></Steps>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundSize: "400% 400%",
          background:
            "linear-gradient(-45deg, #0494cc, #0781b6, #043c74, #0a5a96, #036098, #021b56)",
          animation: "bgAnimation 5s ease infinite",
          display: "flex",
          alignItems: "center", // Vertically centers the content
          justifyContent: "center", // Horizontally centers the content
          // Prevents any overflow issues
          // Set custom cursor
          marginTop: "50px",
        }}
      >
        {" "}
        <div
          // style={{
          //   // marginTop: "-300px",
          //   height: "100%",
          //   width: "100%",
          //   // paddingLeft: "4.9%",
          //   background: "transparent",
          // }}
          style={{
            // marginTop: "-300px",
            height: "100%",
            width: "100%",
            padding: " 0 10% 0 3.5%",
            background: "transparent",
          }}
        >
          {" "}
          <Computer />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>
          <a
            href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
            target="_blank"
            rel="noopener noreferrer"
          >
            3D model credits{" "}
          </a>
          .
        </p>
      </div>
      <FeedForm />
      <Testimonials></Testimonials>
      {/* <BookDemo /> */}
      {/* <Ourfeedback /> */}
    </>
  );
}

export default Home;
//MongoDB
// 3Bdq1UL48QIV3D5V
// collabvisioninfosolution
// mongodb+srv://collabvisioninfosolution:3Bdq1UL48QIV3D5V@cluster0.s5lok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
