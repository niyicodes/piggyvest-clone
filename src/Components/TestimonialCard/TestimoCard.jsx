import React from "react";
import styled from "styled-components";
import TestiPerson from "/assets/testi1.jpg";

const TestimoCard = ({ date, image, name, testimony }) => {
 return (
  <TestiCard>
   <h6>{date}</h6>
   <div className="person">
    <img src={image} alt="" />
    <div className="person-Details">
     <h4>{name}</h4>
     <p>{testimony}</p>
    </div>
   </div>
  </TestiCard>
 );
};

const TestiCard = styled.div`
 display: flex;
 flex-direction: column;
 justify-self: center;
 align-self: center;
 gap: 1rem;
 padding: 20px 25px !important;
 width: auto;
 border: none;
 margin-bottom: 1rem;
 background-color: #f9f9f9;
 h6 {
  margin-left: auto;
  padding-right: 10px;
  text-align: right;
  color: #727272;
  font-family: "DM Sans", sans-serif !important;
  font-weight: 400;
  font-size: 15px;
 }
 .person {
  display: flex;
  gap: 1rem;
  img {
   display: block;
   border-radius: 50%;
   width: 50px;
   height: 50px;
  }
  &-Details {
   h4 {
    font-size: 25px;
    font-family: "Inter", sans-serif !important;
    padding-bottom: 8px;
   }
   p {
    font-family: "DM Sans", sans-serif !important;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    text-align: justify;
    width: 90%;
   }
  }
 }
 @media screen and (max-width: 428px) {
  /* width: 100%!important; */
  padding: 15px;
  h6 {
   font-size: 9px;
  }
  .person {
   gap: 15px;
   img {
    width: 35px;
    height: 35px;
   }
   &-Details {
    h4 {
     font-size: 15px;
    }
    p {
     font-size: 13px;
     line-height: 1.3;
    }
   }
  }
 }

 @media screen and (max-width: 960px) {
  width: 100%;
  padding: 20px;
 }
`;
export default TestimoCard;
