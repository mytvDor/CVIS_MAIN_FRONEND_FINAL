// // // // // import React, { useEffect, useState } from "react";
// // // // // import "./Testimonials.css";
// // // // // import axios from "axios";

// // // // // const PriceCard = () => {
// // // // //   const [feeds, setFeeds] = useState([]);

// // // // //   return (
// // // // //     <div className="body1">
// // // // //       {" "}
// // // // //       <h1>What our customer says ?</h1>{" "}
// // // // //       <div className="wrapper">
// // // // //         {feeds.map((item) => (
// // // // //           <div key={item._id} className="box animate-down">
// // // // //             <i className="fas fa-quote-left quote"></i>
// // // // //             <div style={{ fontWeight: "700" }}>Mobile Development</div>
// // // // //             <p>{item.likeMost}</p>
// // // // //             <div className="content">
// // // // //               <div className="info">
// // // // //                 <div
// // // // //                   className="raing"
// // // // //                   style={{ color: "gold", fontSize: "20px" }}
// // // // //                 ></div>
// // // // //                 <div className="name">
// // // // //                   {item.firstName} {item.lastName}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //         {/* <div className="box animate-down">
// // // // //           <i className="fas fa-quote-left quote"></i>
// // // // //           <p>
// // // // //             Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
// // // // //             elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
// // // // //             repellendus repudiandae deleniti ideas fuga molestiae, alias.
// // // // //           </p>
// // // // //           <div className="content">
// // // // //             <div className="info">
// // // // //               <div className="name">Alex Smith</div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="box animate-down">
// // // // //           <i className="fas fa-quote-left quote"></i>
// // // // //           <p>
// // // // //             Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
// // // // //             elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
// // // // //             repellendus repudiandae deleniti ideas fuga molestiae, alias.
// // // // //           </p>
// // // // //           <div className="content">
// // // // //             <div className="info">
// // // // //               <div className="name">Alex Smith</div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div> */}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PriceCard;
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./Testimonials.css";

// // // // const PriceCard = () => {
// // // //   const [feeds, setFeeds] = useState([
// // // //     {
// // // //       _id: "1",
// // // //       title: "Basic Plan",
// // // //       price: "$19.99",
// // // //       description: "Includes basic features and support.",
// // // //     },
// // // //     {
// // // //       _id: "2",
// // // //       title: "Standard Plan",
// // // //       price: "$39.99",
// // // //       description: "Offers priority support.",
// // // //     },
// // // //     {
// // // //       _id: "3",
// // // //       title: "Premium Plan",
// // // //       price: "$59.99",
// // // //       description: "All features plus premium support.",
// // // //     },
// // // //     {
// // // //       _id: "4",
// // // //       title: "Ultimate Plan",
// // // //       price: "$99.99",
// // // //       description: "Unlimited access with full support.",
// // // //     },
// // // //     {
// // // //       _id: "5",
// // // //       title: "Enterprise Plan",
// // // //       price: "$199.99",
// // // //       description: "Customized solutions for large organizations.",
// // // //     },
// // // //   ]);

// // // //   return (
// // // //     <div className="body1">
// // // //       <h1>What Our Customers Say?</h1>
// // // //       <div className="wrapper">
// // // //         {feeds.map((item) => (
// // // //           <div key={item._id} className="box animate-down">
// // // //             <div
// // // //               style={{
// // // //                 fontWeight: "700",
// // // //                 fontSize: "1.25rem",
// // // //                 marginBottom: "0.5rem",
// // // //               }}
// // // //             >
// // // //               {item.title}
// // // //             </div>
// // // //             <div
// // // //               style={{
// // // //                 fontSize: "1.125rem",
// // // //                 color: "green",
// // // //                 marginBottom: "0.5rem",
// // // //               }}
// // // //             >
// // // //               {item.price}
// // // //             </div>
// // // //             <p style={{ marginBottom: "0.5rem" }}>{item.description}</p>
// // // //             <p>{item.likeMost}</p>
// // // //             <div className="content">
// // // //               <div className="info">
// // // //                 <div
// // // //                   className="raing"
// // // //                   style={{ color: "gold", fontSize: "20px" }}
// // // //                 ></div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PriceCard;
// // // import React, { useState } from "react";
// // // import "./Testimonials.css"; // Optional if not using any CSS classes

// // // const PriceCard = () => {
// // //   const [feeds] = useState([
// // //     {
// // //       _id: "1",
// // //       title: "Basic Plan",
// // //       price: "$19.99",
// // //       descriptionPoints: [
// // //         "Includes basic features",
// // //         "Standard support",
// // //         "Ideal for personal use",
// // //       ],
// // //     },
// // //     {
// // //       _id: "2",
// // //       title: "Standard Plan",
// // //       price: "$39.99",
// // //       descriptionPoints: [
// // //         "More features than Basic Plan",
// // //         "Priority support",
// // //         "Best for small businesses",
// // //       ],
// // //     },
// // //     {
// // //       _id: "3",
// // //       title: "Premium Plan",
// // //       price: "$59.99",
// // //       descriptionPoints: [
// // //         "All features included",
// // //         "Premium support",
// // //         "perform",
// // //       ],
// // //     },
// // //     {
// // //       _id: "4",
// // //       title: "Ultimate Plan",
// // //       price: "$99.99",
// // //       descriptionPoints: [
// // //         "Unlimited access",
// // //         "Full support",
// // //         "Best for large organizations",
// // //       ],
// // //     },
// // //   ]);

// // //   return (
// // //     <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
// // //       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
// // //         What Our Customers Say?
// // //       </h1>
// // //       <div
// // //         style={{
// // //           display: "flex",
// // //           flexWrap: "wrap",
// // //           justifyContent: "space-around",
// // //         }}
// // //       >
// // //         {feeds.map((item) => (
// // //           <div
// // //             key={item._id}
// // //             style={{
// // //               backgroundColor: "#fff",
// // //               border: "1px solid #ddd",
// // //               borderRadius: "8px",
// // //               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// // //               width: "300px",
// // //               margin: "10px",
// // //               padding: "20px",
// // //               textAlign: "center",
// // //             }}
// // //           >
// // //             <div
// // //               style={{
// // //                 fontWeight: "700",
// // //                 fontSize: "1.25rem",
// // //                 marginBottom: "10px",
// // //               }}
// // //             >
// // //               {item.title}
// // //             </div>
// // //             Starts From
// // //             <div
// // //               style={{
// // //                 fontSize: "1.125rem",
// // //                 color: "green",
// // //                 marginBottom: "10px",
// // //               }}
// // //             >
// // //               {item.price}
// // //             </div>
// // //             <div style={{ textAlign: "left", marginBottom: "10px" }}>
// // //               {item.descriptionPoints.map((point, index) => (
// // //                 <p
// // //                   key={index}
// // //                   style={{ marginBottom: "5px", marginLeft: "10px" }}
// // //                 >
// // //                   • {point}
// // //                 </p>
// // //               ))}
// // //             </div>
// // //             <button
// // //               style={{
// // //                 backgroundColor: "#007bff",
// // //                 color: "#fff",
// // //                 border: "none",
// // //                 padding: "10px 20px",
// // //                 borderRadius: "5px",
// // //                 cursor: "pointer",
// // //                 fontSize: "16px",
// // //                 marginTop: "10px",
// // //               }}
// // //               onClick={() => alert("Button clicked!")}
// // //             >
// // //               Contact us{" "}
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PriceCard;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faMobileAlt,
// //   faLaptop,
// //   faTabletAlt,
// //   faWatch,
// // } from "@fortawesome/free-solid-svg-icons";

// // import "./Testimonials.css"; // Optional if not using any CSS classes

// // const PriceCard = () => {
// //   const [feeds] = useState([
// //     {
// //       _id: "1",
// //       title: "Basic Plan",
// //       price: "$19.99",
// //       descriptionPoints: [
// //         "Includes basic features",
// //         "Standard support",
// //         "Ideal for personal use",
// //       ],
// //       icon: faMobileAlt, // Font Awesome icon for mobile
// //     },
// //     {
// //       _id: "2",
// //       title: "Standard Plan",
// //       price: "$39.99",
// //       descriptionPoints: [
// //         "More features than Basic Plan",
// //         "Priority support",
// //         "Best for small businesses",
// //       ],
// //       icon: faLaptop, // Font Awesome icon for laptop
// //     },
// //     {
// //       _id: "3",
// //       title: "Premium Plan",
// //       price: "$59.99",
// //       descriptionPoints: [
// //         "All features included",
// //         "Premium support",
// //         "Perfect for growing businesses",
// //       ],
// //       icon: faTabletAlt, // Font Awesome icon for tablet
// //     },
// //     {
// //       _id: "4",
// //       title: "Ultimate Plan",
// //       price: "$99.99",
// //       descriptionPoints: [
// //         "Unlimited access",
// //         "Full support",
// //         "Best for large organizations",
// //       ],
// //       icon: faWatch, // Font Awesome icon for watch
// //     },
// //   ]);

// //   const navigate = useNavigate(); // Initialize useNavigate

// //   return (
// //     <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
// //       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
// //         What Our Customers Say?
// //       </h1>
// //       <div
// //         style={{
// //           display: "flex",
// //           flexWrap: "wrap",
// //           justifyContent: "space-around",
// //         }}
// //       >
// //         {feeds.map((item) => (
// //           <div
// //             key={item._id}
// //             style={{
// //               backgroundColor: "#fff",
// //               border: "1px solid #ddd",
// //               borderRadius: "8px",
// //               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //               width: "300px",
// //               margin: "10px",
// //               padding: "20px",
// //               textAlign: "center",
// //             }}
// //           >
// //             <FontAwesomeIcon
// //               icon={item.icon}
// //               style={{
// //                 fontSize: "30px",
// //                 color: "#007bff",
// //                 marginBottom: "10px",
// //               }}
// //             />
// //             <div
// //               style={{
// //                 fontWeight: "700",
// //                 fontSize: "1.25rem",
// //                 marginBottom: "10px",
// //               }}
// //             >
// //               {item.title}
// //             </div>
// //             <div
// //               style={{
// //                 fontSize: "1.125rem",
// //                 color: "green",
// //                 marginBottom: "10px",
// //               }}
// //             >
// //               Starts From {item.price}
// //             </div>
// //             <div style={{ textAlign: "left", marginBottom: "10px" }}>
// //               {item.descriptionPoints.map((point, index) => (
// //                 <p
// //                   key={index}
// //                   style={{ marginBottom: "5px", marginLeft: "10px" }}
// //                 >
// //                   • {point}
// //                 </p>
// //               ))}
// //             </div>
// //             <button
// //               style={{
// //                 backgroundColor: "#007bff",
// //                 color: "#fff",
// //                 border: "none",
// //                 padding: "10px 20px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 fontSize: "16px",
// //                 marginTop: "10px",
// //               }}
// //               onClick={() => navigate("/contact")} // Navigate to the contact route
// //             >
// //               Contact Us
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // export default PriceCard;
// // import React, { useState } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faMobileAlt,
// //   faLaptop,
// //   faTabletAlt,
// // } from "@fortawesome/free-solid-svg-icons";
// // import { useNavigate } from "react-router-dom";
// // import "./Testimonials.css"; // Optional if not using any CSS classes

// // const PriceCard = () => {
// //   const navigate = useNavigate();

// //   const [feeds] = useState([
// //     {
// //       _id: "1",
// //       title: "Basic Plan",
// //       price: "$19.99",
// //       descriptionPoints: [
// //         "Includes basic features",
// //         "Standard support",
// //         "Ideal for personal use",
// //       ],
// //       icon: faMobileAlt,
// //     },
// //     {
// //       _id: "2",
// //       title: "Standard Plan",
// //       price: "$39.99",
// //       descriptionPoints: [
// //         "More features than Basic Plan",
// //         "Priority support",
// //         "Best for small businesses",
// //       ],
// //       icon: faLaptop,
// //     },
// //     {
// //       _id: "3",
// //       title: "Premium Plan",
// //       price: "$59.99",
// //       descriptionPoints: ["All features included", "Premium support"],
// //       icon: faTabletAlt,
// //     },
// //     {
// //       _id: "4",
// //       title: "Ultimate Plan",
// //       price: "$99.99",
// //       descriptionPoints: [
// //         "Unlimited access",
// //         "Full support",
// //         "Best for large organizations",
// //       ],
// //       icon: faMobileAlt,
// //     },
// //   ]);

// //   return (
// //     <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
// //       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
// //         What Our Customers Say?
// //       </h1>
// //       <div
// //         style={{
// //           display: "flex",
// //           flexWrap: "wrap",
// //           justifyContent: "space-around",
// //         }}
// //       >
// //         {feeds.map((item) => (
// //           <div
// //             key={item._id}
// //             style={{
// //               backgroundColor: "#fff",
// //               border: "1px solid #ddd",
// //               borderRadius: "8px",
// //               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //               width: "300px",
// //               margin: "10px",
// //               padding: "20px",
// //               textAlign: "center",
// //             }}
// //           >
// //             <FontAwesomeIcon
// //               icon={item.icon}
// //               size="3x"
// //               style={{ marginBottom: "10px" }}
// //             />
// //             <div
// //               style={{
// //                 fontWeight: "700",
// //                 fontSize: "1.25rem",
// //                 marginBottom: "10px",
// //               }}
// //             >
// //               {item.title}
// //             </div>
// //             Starts From
// //             <div
// //               style={{
// //                 fontSize: "1.125rem",
// //                 color: "green",
// //                 marginBottom: "10px",
// //               }}
// //             >
// //               {item.price}
// //             </div>
// //             <div style={{ textAlign: "left", marginBottom: "10px" }}>
// //               {item.descriptionPoints.map((point, index) => (
// //                 <p
// //                   key={index}
// //                   style={{ marginBottom: "5px", marginLeft: "10px" }}
// //                 >
// //                   • {point}
// //                 </p>
// //               ))}
// //             </div>
// //             <button
// //               style={{
// //                 backgroundColor: "#007bff",
// //                 color: "#fff",
// //                 border: "none",
// //                 padding: "10px 20px",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 fontSize: "16px",
// //                 marginTop: "10px",
// //               }}
// //               onClick={() => navigate("/contact")}
// //             >
// //               Contact us
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PriceCard;
// import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMobileAlt,
//   faLaptop,
//   faTabletAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

// // Keyframe Animation Definition (CSS-in-JS approach)
// const keyframes = `
//   @keyframes gradientAnimation {
//     0% {
//       background-position: 0% 0%;
//     }
//     50% {
//       background-position: 100% 100%;
//     }
//     100% {
//       background-position: 0% 0%;
//     }
//   }
// `;

// const PriceCard = () => {
//   const navigate = useNavigate();

//   const [feeds] = React.useState([
//     {
//       _id: "1",
//       title: "Basic Plan",
//       price: "$19.99",
//       descriptionPoints: [
//         "Includes basic features",
//         "Standard support",
//         "Ideal for personal use",
//       ],
//       icon: faMobileAlt,
//       colorGradient: "linear-gradient(-45deg, #f403d1, #64b5f6)", // Gradient color for the card
//     },
//     {
//       _id: "2",
//       title: "Standard Plan",
//       price: "$39.99",
//       descriptionPoints: [
//         "More features than Basic Plan",
//         "Priority support",
//         "Best for small businesses",
//       ],
//       icon: faLaptop,
//       colorGradient: "linear-gradient(-45deg, #ffec61, #f321d7)", // Gradient color for the card
//     },
//     {
//       _id: "3",
//       title: "Premium Plan",
//       price: "$59.99",
//       descriptionPoints: ["All features included", "Premium support"],
//       icon: faTabletAlt,
//       colorGradient: "linear-gradient(-45deg, #24ff72, #9a4eff)", // Gradient color for the card
//     },
//     {
//       _id: "4",
//       title: "Ultimate Plan",
//       price: "$99.99",
//       descriptionPoints: [
//         "Unlimited access",
//         "Full support",
//         "Best for large organizations",
//       ],
//       icon: faMobileAlt,
//       colorGradient: "linear-gradient(-45deg, #ff0844, #ffb700)", // Gradient color for the card
//     },
//   ]);

//   // Create a style tag to inject keyframes into the DOM
//   useEffect(() => {
//     const styleTag = document.createElement("style");
//     styleTag.innerHTML = keyframes;
//     document.head.appendChild(styleTag);
//     return () => {
//       document.head.removeChild(styleTag);
//     };
//   }, []);

//   return (
//     <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
//         What Our Customers Say?
//       </h1>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-around",
//         }}
//       >
//         {feeds.map((item) => (
//           <div
//             key={item._id}
//             style={{
//               background: item.colorGradient,
//               backgroundSize: "200% 200%",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               borderRadius: "15px",
//               width: "300px",
//               margin: "10px",
//               padding: "20px",
//               textAlign: "center",
//               animation: "gradientAnimation 5s ease infinite", // Apply the gradient animation
//             }}
//           >
//             <FontAwesomeIcon
//               icon={item.icon}
//               size="3x"
//               style={{ marginBottom: "10px" }}
//             />
//             <div
//               style={{
//                 fontWeight: "700",
//                 fontSize: "1.25rem",
//                 marginBottom: "10px",
//               }}
//             >
//               {item.title}
//             </div>
//             Starts From
//             <div
//               style={{
//                 fontSize: "1.125rem",
//                 color: "green",
//                 marginBottom: "10px",
//               }}
//             >
//               {item.price}
//             </div>
//             <div style={{ textAlign: "left", marginBottom: "10px" }}>
//               {item.descriptionPoints.map((point, index) => (
//                 <p
//                   key={index}
//                   style={{ marginBottom: "5px", marginLeft: "10px" }}
//                 >
//                   • {point}
//                 </p>
//               ))}
//             </div>
//             <button
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 padding: "10px 20px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//                 marginTop: "10px",
//               }}
//               onClick={() => navigate("/contact")}
//             >
//               Contact us
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PriceCard;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLaptop,
  faTabletAlt,
  faCode, // Assuming you want to use this for app development
  faDesktop, // Assuming you want to use this for web development
  faCogs, // Assuming you want to use this for desktop app development
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// Keyframe Animation Definition (CSS-in-JS approach)
const keyframes = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const PriceCard = () => {
  const navigate = useNavigate();

  const [feeds] = React.useState([
    {
      _id: "1",
      title: "App Development",
      price: "$119",
      descriptionPoints: [
        "Mobile app development",
        "Cross-platform support",
        "Custom features and UI",
      ],
      icon: faCode,
      colorGradient: "linear-gradient(-45deg, #f403d1, #64b5f6)", // Gradient color for the card
    },
    {
      _id: "2",
      title: "Web Development",
      price: "$59.99",
      descriptionPoints: [
        "web development",
        "Responsive design",
        "SEO optimization",
      ],
      icon: faDesktop,
      colorGradient: "linear-gradient(-45deg, #24ff72, #9a4eff)", // Gradient color for the card
    },
    {
      _id: "3",
      title: "Desktop App Development",
      price: "$99.99",
      descriptionPoints: [
        "Cross-platform desktop apps",
        "Custom software solutions",
        "Enhanced performance",
      ],
      icon: faCogs,
      colorGradient: "linear-gradient(-45deg, #ffec61, #f321d7)", // Gradient color for the card
    },
  ]);

  // Create a style tag to inject keyframes into the DOM
  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Pricing </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {feeds.map((item) => (
          <div
            key={item._id}
            style={{
              background: item.colorGradient,
              backgroundSize: "200% 200%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px",
              width: "300px",
              margin: "10px",
              padding: "20px",
              textAlign: "center",
              animation: "gradientAnimation 5s ease infinite", // Apply the gradient animation
              color: "white",
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="3x"
              style={{ marginBottom: "10px" }}
              color="white"
            />
            <div
              style={{
                fontWeight: "700",
                fontSize: "1.25rem",
                marginBottom: "10px",
                color: "white",
              }}
            >
              {item.title}
            </div>
            Starts From
            <div
              style={{
                fontSize: "1.125rem",
                color: "white",
                marginBottom: "10px",
              }}
            >
              {item.price}
            </div>
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
              {item.descriptionPoints.map((point, index) => (
                <p
                  key={index}
                  style={{ marginBottom: "5px", marginLeft: "10px" }}
                >
                  • {point}
                </p>
              ))}
            </div>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
              }}
              onClick={() => navigate("/contact")}
            >
              Contact us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
