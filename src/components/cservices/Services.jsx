// import "./Services.css";
// import React from "react";
// import { Image } from "antd";
// import { NewsHeaderCard } from "react-ui-cards";
// import Navbar from "../attributes/Navbar";
// const cardData = [
//   {
//     href: "/services/webdesign",
//     thumbnail:
//       "https://static.wixstatic.com/media/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg/v1/fill/w_558,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg",
//     title: "Web Development",
//   },
//   {
//     href: "/services/appdev",
//     thumbnail:
//       "https://static.wixstatic.com/media/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg",
//     title: "Application Development",
//   },

//   {
//     href: "/services/Integration",
//     thumbnail:
//       "https://static.wixstatic.com/media/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg",
//     title: "Integration",
//   },
// ];
// function Services() {
//   return (
//     <>
//       <Navbar />

//       <div>
//         <h1 className="HeaderText Ht">Services</h1>
//         <div className="Headerimage ">
//           <Image
//             className="img"
//             width={"100%"}
//             height={"100%"}
//             src="https://static.wixstatic.com/media/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg/v1/fill/w_1899,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg"
//           />
//         </div>
//         <div className="gapper">
//           <div className="cards">
//             {cardData.map((card, index) => (
//               <div className="mycard-Learn1 l1 animate-down">
//                 <NewsHeaderCard
//                   key={index}
//                   className="mainCard"
//                   href={card.href}
//                   thumbnail={card.thumbnail}
//                   title={card.title}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Services;
import "./Services.css";
import React from "react";
import { Image } from "antd";
import { NewsHeaderCard } from "react-ui-cards";
import Navbar from "../attributes/Navbar";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    href: "/services/webdesign",
    thumbnail:
      "https://static.wixstatic.com/media/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg/v1/fill/w_558,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg",
    title: "Web Development",
  },
  {
    href: "/services/appdev",
    thumbnail:
      "https://static.wixstatic.com/media/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg",
    title: "Application Development",
  },
  {
    href: "/services/integration",
    thumbnail:
      "https://static.wixstatic.com/media/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_10efa682cfba485d983f4cb28e0c8ac4~mv2.jpg",
    title: "Integration",
  },
];

function Services() {
  const navigate = useNavigate();

  const handleCardClick = (href) => {
    navigate(href);
  };

  return (
    <>
      <Navbar />

      <div>
        <h1 className="HeaderText Ht">Services</h1>
        <div className="Headerimage">
          <Image
            className="img"
            width={"100%"}
            height={"100%"}
            src="https://static.wixstatic.com/media/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg/v1/fill/w_1899,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bd24f5b72b31462882a36f9ce22c7e3a~mv2.jpeg"
          />
        </div>
        <div className="gapper">
          <div className="cards">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="mycard-Learn1 l1 animate-down"
                onClick={() => handleCardClick(card.href)}
                style={{ cursor: "pointer" }}
              >
                <NewsHeaderCard
                  className="mainCard"
                  thumbnail={card.thumbnail}
                  title={card.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
