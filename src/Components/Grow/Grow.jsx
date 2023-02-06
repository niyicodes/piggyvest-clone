import React from "react";
import styled from "styled-components";
import { RightArrow } from "../Icons/icon";

const Grow = ({ title, subtitle, name, image }) => {
 return (
  <GrowInvestment className="saver">
   <div className="saver-meet">
    <div className="another">
     <h2>{title}</h2>
     <p>
      {subtitle}
     </p>
     {name && <span>
      <RightArrow /> {name}
     </span>}
    </div>
   </div>
   <div className="saver-picture">
    <img src={image} alt="" />
   </div>
  </GrowInvestment>
 );
};

const GrowInvestment = styled.section`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 background-color: #0d60d8;
 margin: 4rem 0;
 height: 500px;

 .saver-meet {
  padding: 2rem 2.5rem;
  color: white;
  width: 60%;

  .another {
   width: 80%;
   margin: auto;
  }
  h2 {
   font-size: 50px;
   line-height: 1.1;
   width: 90%;
   padding-bottom: 15px;
  }
  p {
   font-size: 20px;
   /* width: 95%; */
   padding-bottom: 15px;
  }
  span {
   padding-top: 15px;
   svg {
    color: #0d60d8 !important;
    border-radius: 50%;
    background-color: white;
   }
  }
 }
 .saver-picture {
  width: 40%;
  height: 100%;
  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
 }

 @media screen and (max-width: 428px){}
@media screen and (max-width: 960px){}
`;

export default Grow;
