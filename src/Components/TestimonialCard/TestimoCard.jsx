import React from "react";
import styled from "styled-components";
import TestiPerson from "/assets/testi1.jpg";
const TestimoCard = () => {
 return (
  <TestiCard>
   <h6>Thursday, 27th of October 2022 by 13:03pm</h6>
   <div className="person">
    <img src={TestiPerson} alt="" />
    <div className="person-Details">
     <h4>Rachael O</h4>
     <p>
      My name is Rachael Joseph and I am here to testify that Piggyvest has
      helped me a lot. I had to spread the good news to my friends and tell them
      about the app and behold they are also using it. Thank you so much
      Pggyvest for saving me cause I am the type of person that spends lavishly.
      Thank you once again Piggyvest 💙
     </p>
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
 padding: 20px 25px!important;
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
