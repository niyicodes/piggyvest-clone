import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RightArrow } from "../Icons/icon";

const Card = ({
 topIcon,
 name,
 words,
 title,
 color,
 per,
 investors,
 availabilty,
 image,
 onClick,
 id,
 rate, to
}) => {
 const navigate = useNavigate()
 return (
  <CardComponent className="card" onClick={onClick}>
   {image && <img src={image} alt="" />}
   {topIcon && <img src={topIcon} alt="" />}
   <h2>{name}</h2>
   {words && <p>{words}</p>}
   {per && (
    <div className="card-info">
     <div className="card-info-details">
      <div>
       <span>
        <h5>₦{per}</h5>
        <small>per unit</small>
       </span>
      </div>
      <div>
       <span>
        <h5>{investors}</h5>
        <small>investors</small>
       </span>
      </div>
     </div>
     {availabilty && <h6><span>{availabilty}</span></h6>}
    </div>
   )}
   {
    <span onClick={() => navigate(`/${to}`)}>
     {title && <RightArrow style={color} />}
     {title && <h4>{title}</h4>}
    </span>
   }
  </CardComponent>
 );
};

const CardComponent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 gap: 1.5rem;
 padding: 35px 30px;
 background-color: #e7e4e4;
 align-items: left;
 border-radius: 20px;
 width: auto;
 line-height: 1.4;
 cursor: pointer;
 &:hover span {
  transform: translateX(15px);
  transition: all 0.6s ease;
 }
 img {
  width: 50px;
  object-fit: contain;
 }

 h4 {
  font-family: "Inter", sans-serif !important;
  font-weight: 700;
 }
 p {
  font-family: "DM Sans", sans-serif !important;
  font-weight: normal;
 }
 span {
  svg {
   /* background-color: ; */
   border-radius: 50%;
   color: black !important;
  }
 }

 @media screen and (max-width: 960px) {
  align-items: center;
 }
`;
export default Card;
