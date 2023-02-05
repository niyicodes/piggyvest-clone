import React from "react";
import styled from "styled-components";
import { RightArrow } from "../Icons/icon";

const Card = ({ topIcon, name, words, title, color }) => {
 return (
  <CardComponent>
   <img src={topIcon} alt="" />
   <h2>{name}</h2>
   <p>{words}</p>
   <span>
    <RightArrow style={color}/>
    <h4>{title}</h4>
   </span>
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
