// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode, faDesktop, faCogs } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import { faDesktopAlt } from "@fortawesome/free-solid-svg-icons";
// import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
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

//   @keyframes pulse {
//     0% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.05);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
//       @keyframes shineEffect {  // Updated keyframes name
//     0% {
//       left: -100%;
//     }
//     100% {
//       left: 100%;
//     }
//   }
// `;

// const PriceCard = () => {
//   const navigate = useNavigate();

//   const [feeds] = React.useState([
//     {
//       _id: "1",
//       title: "MuleSoft Integration",
//       price: "$0 Free Tier",
//       descriptionPoints: [
//         "Cross-platform apps",
//         "Custom software solutions",
//         "Enhanced performance",
//         "T & C apply",
//       ],
//       icon: faCogs,
//       colorGradient: "linear-gradient(-45deg, #ffec61, #f321d7)", // More vibrant gradient for the free tier
//     },
//     {
//       _id: "2",
//       title: "Application Development",
//       price: "$119",
//       descriptionPoints: [
//         "Mobile app development",
//         "Cross-platform support",
//         "Custom features and UI",
//         "T & C apply",
//       ],
//       icon: faCode,
//       colorGradient: "linear-gradient(-45deg, #f403d1, #64b5f6)",
//     },

//     {
//       _id: "3",
//       title: "Desktop App Development",
//       price: "$99.99",
//       descriptionPoints: [
//         "Cross-platform apps",
//         "Custom software solutions",
//         "Enhanced performance",
//         "T & C apply",
//       ],
//       icon: faDesktopAlt,
//       colorGradient: "linear-gradient(-45deg, #ffec61, #f321d7)",
//     },
//     {
//       _id: "4",
//       title: "Website / web app Development",
//       price: "$59.99",
//       descriptionPoints: [
//         "web development",
//         "Responsive design",
//         "SEO optimization",
//         "T & C apply",
//       ],
//       icon: faNetworkWired,
//       colorGradient: "linear-gradient(-45deg, #f403d1, #64b5f6)",
//     },
//   ]);

//   React.useEffect(() => {
//     const styleTag = document.createElement("style");
//     styleTag.innerHTML = keyframes;
//     document.head.appendChild(styleTag);
//     return () => {
//       document.head.removeChild(styleTag);
//     };
//   }, []);

//   return (
//     <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Pricing</h1>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {feeds.map((item, index) => (
//           <div
//             key={item._id}
//             style={{
//               background: item.colorGradient,
//               backgroundSize: "100% 100%",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               borderRadius: "15px",
//               width: index === 0 ? "320px" : "300px", // Slightly larger width for the first card
//               margin: "10px",
//               padding: "20px",
//               textAlign: "center",
//               animation: `gradientAnimation 5s ease infinite ${
//                 index === 0 ? ", pulse 2s infinite" : ""
//               }`, // Add pulse animation to the first card
//               color: "white",
//               position: "relative", // Position for the badge
//             }}
//           >
//             {index === 0 && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-10px",
//                   right: "-10px",
//                   backgroundColor: "#ff4757",
//                   color: "white",
//                   padding: "5px 10px",
//                   borderRadius: "45px",
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                   background: "rgba(255, 71, 87, 0.7)",
//                   backdropFilter: "blur(5px)",
//                   border: "1px solid rgba(255, 255, 255, 0.3)",
//                   overflow: "hidden", // Ensure the pseudo-element doesn't overflow the badge
//                 }}
//               >
//                 Free
//                 <span
//                   style={{
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: "-100%", // Start the shine off-screen
//                     width: "200%",
//                     height: "100%",
//                     background:
//                       "linear-gradient(120deg, rgba(255, 255, 255, 0.2),  rgba(255, 255, 255, 0.2))",
//                     transform: "skewX(-30deg)", // Create the angled shine effect
//                     animation: "shineEffect 3s infinite", // Updated animation name
//                   }}
//                 />
//               </div>
//             )}
//             <FontAwesomeIcon
//               icon={item.icon}
//               size="3x"
//               style={{ marginBottom: "10px" }}
//               color="white"
//             />
//             <div
//               style={{
//                 fontWeight: "700",
//                 fontSize: index === 0 ? "1.5rem" : "1.25rem", // Larger font size for the first card
//                 marginBottom: "10px",
//                 color: "white",
//               }}
//             >
//               {item.title}
//             </div>
//             Starts From
//             <div
//               style={{
//                 fontSize: index === 0 ? "3.125rem" : "2.925rem", // Larger price font for the first card
//                 fontWeight: "700",
//                 color: "white",
//                 marginBottom: "10px",
//               }}
//             >
//               {item.price}
//             </div>
//             <div style={{ textAlign: "left", marginBottom: "10px" }}>
//               {item.descriptionPoints.map((point, index) => (
//                 <p
//                   key={index}
//                   style={{
//                     marginBottom: "5px",
//                     marginLeft: "10px",
//                     fontSize: "17px",
//                   }}
//                 >
//                   • {point}
//                 </p>
//               ))}
//             </div>
//             <button
//               style={{
//                 backgroundColor: "white",
//                 color: "black",
//                 border: "none",
//                 padding: "10px 20px",
//                 borderRadius: "10px",
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
import { faCode, faDesktop, faCogs } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faDesktopAlt, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

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

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes shineEffect {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const PriceCard = () => {
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = React.useState(""); // Country selection state
  const [feeds] = React.useState([
    {
      _id: "1",
      title: "MuleSoft Integration",
      price: { us: "$0", india: "₹0", singapore: "SD 0", other: "$0" }, // Price by country
      descriptionPoints: [
        "Cross-platform apps",
        "Custom software solutions",
        "Enhanced performance",
        "T & C apply",
      ],
      icon: faCogs,
      colorGradient: "linear-gradient(-45deg, #ffec61, #f321d7)",
    },
    {
      _id: "2",
      title: "Application Development",
      price: { us: "$119", india: "₹8,999", singapore: "SD 150", other: "$119" },
      descriptionPoints: [
        "Mobile app development",
        "Cross-platform support",
        "Custom features and UI",
        "T & C apply",
      ],
      icon: faCode,
      colorGradient: "linear-gradient(-45deg, #f403d1, #64b5f6)",
    },
    {
      _id: "3",
      title: "Desktop App Development",
      price: { us: "$99.99", india: "₹7,499", singapore: "SD 120", other: "$99.99" },
      descriptionPoints: [
        "Cross-platform apps",
        "Custom software solutions",
        "Enhanced performance",
        "T & C apply",
      ],
      icon: faDesktopAlt,
      colorGradient: "linear-gradient(-45deg, #ffec61, #f321d7)",
    },
    {
      _id: "4",
      title: "Website / web app Development",
      price: { us: "$59.99", india: "₹4,499", singapore: "SD 70", other: "$59.99" },
      descriptionPoints: [
        "web development",
        "Responsive design",
        "SEO optimization",
        "T & C apply",
      ],
      icon: faNetworkWired,
      colorGradient: "linear-gradient(-45deg, #f403d1, #64b5f6)",
    },
  ]);

  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Pricing</h1>
      
      {/* Country selection dropdown */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label htmlFor="country-select" style={{ fontSize: "18px", fontWeight: "bold" , marginBottom:"25px" }}>
          Select your country:
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{
            marginLeft: "10px",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          <option value=""> Select Country </option>
          <option value="india">India</option>
          <option value="singapore">Singapore</option>
          <option value="us">United States</option>

          <option value="other">Other</option>
        </select>
      </div>

      {/* Show price cards only if a country is selected */}
      {selectedCountry ? (
       <> <div
       style={{
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "center",
       }}
     >
       {feeds.map((item, index) => (
         <div
           key={item._id}
           style={{
             background: item.colorGradient,
             backgroundSize: "100% 100%",
             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
             borderRadius: "15px",
             width: index === 0 ? "320px" : "300px",
             margin: "10px",
             padding: "20px",
             textAlign: "center",
             animation: `gradientAnimation 5s ease infinite ${
               index === 0 ? ", pulse 2s infinite" : ""
             }`,
             color: "white",
             position: "relative",
           }}
         >
           {index === 0 && (
             <div
               style={{
                 position: "absolute",
                 top: "-10px",
                 right: "-10px",
                 backgroundColor: "#ff4757",
                 color: "white",
                 padding: "5px 10px",
                 borderRadius: "45px",
                 fontSize: "24px",
                 fontWeight: "700",
                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                 background: "rgba(255, 71, 87, 0.7)",
                 backdropFilter: "blur(5px)",
                 border: "1px solid rgba(255, 255, 255, 0.3)",
                 overflow: "hidden",
               }}
             >
               Free
               <span
                 style={{
                   content: '""',
                   position: "absolute",
                   top: 0,
                   left: "-100%",
                   width: "200%",
                   height: "100%",
                   background:
                     "linear-gradient(120deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))",
                   transform: "skewX(-30deg)",
                   animation: "shineEffect 3s infinite",
                 }}
               />
             </div>
           )}
           <FontAwesomeIcon
             icon={item.icon}
             size="3x"
             style={{ marginBottom: "10px" }}
             color="white"
           />
           <div
             style={{
               fontWeight: "700",
               fontSize: index === 0 ? "1.5rem" : "1.25rem",
               marginBottom: "10px",
               color: "white",
             }}
           >
             {item.title}
           </div>
           Starts From
           <div
             style={{
               fontSize: index === 0 ? "3.125rem" : "2.925rem",
               fontWeight: "700",
               color: "white",
               marginBottom: "10px",
             }}
           >
             {item.price[selectedCountry]}
           </div>
           <div style={{ textAlign: "left", marginBottom: "10px" }}>
             {item.descriptionPoints.map((point, index) => (
               <p
                 key={index}
                 style={{
                   marginBottom: "5px",
                   marginLeft: "10px",
                   fontSize: "17px",
                 }}
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
     
     <br></br>
     <p style={{textAlign:"center" }}> Terms and Conditions Applied</p></>
      ) : (
        <p style={{ textAlign: "center", color: "linear-gradient(-45deg, #ffec61, #f321d7)", fontSize: "18px" }}>
          Please select a country to view prices.
          <br></br>
          Terms & Conditions Applied
        </p>
      )}
    </div>
  );
};

export default PriceCard;
