import React from "react";
import styled from "styled-components";
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";
import piggyblack from "/assets/piggyblack.png";
import audit from "/assets/audit.png";
const Footer = () => {
 return (
  <FooterComponent>
   <section className="top animate__animated animate__slideInLeft animate__slow">
    <div className="top-left">
     <figure>
      <img src={piggyblack} alt="" />
     </figure>
     <figure>
      <img src={audit} alt="" />
     </figure>
    </div>
    <div className="top-middle">
     <div className="top-middle-column">
      <h5>Products</h5>
      <ul>
       <li>
        <a href="/">Piggybank</a>
       </li>
       <li>
        <a href="/">Invest</a>
       </li>
       <li>
        <a href="/">Safelock</a>
       </li>
       <li>
        <a href="/">Target Savings</a>
       </li>
       <li>
        <a href="/">Flex Naira</a>
       </li>
      </ul>
     </div>
     <div className="top-middle-column">
      <h5>Company</h5>
      <ul>
       <li>
        <a href="/">About</a>
       </li>
       <li>
        <a href="/">FAQs</a>
       </li>
       <li>
        <a href="/">Blog</a>
       </li>
      </ul>
     </div>
     <div className="top-middle-column">
      <h5>Legal</h5>
      <ul>
       <li>
        <a href="/">Terms</a>
       </li>
       <li>
        <a href="/">Privacy</a>
       </li>
       <li>
        <a href="/">Security</a>
       </li>
      </ul>
     </div>
    </div>
    <div className="top-right">
     <div className="top-right-socials">
      <figure>
       <FaFacebookSquare />
      </figure>
      <figure>
       <FaTwitterSquare />
      </figure>
      <figure>
       <FaInstagramSquare />
      </figure>
     </div>
     <div className="top-right-address">
      <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
      <a href="mailto:">contact@piggyvest.com</a>
      <a href="tel:+234700933933933">+234 700 933 933 933</a>
     </div>
    </div>
   </section>
   <section className="bottom animate__animated animate__slideInRight animate__slow">
    <p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
    <small>2016 - 2022 PiggyTech Global Limited - RC 1405222</small>
   </section>
  </FooterComponent>
 );
};

const FooterComponent = styled.footer`
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 gap: 2rem;
 /* align-items: center; */
 margin: 2rem 6rem;

 .top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;

  &-left {
   display: flex;
   flex-direction: column;
   gap: 1rem;

   img {
    width: auto;
   }
  }

  &-middle {
   display: grid;
   grid-template-columns: repeat(3, 180px);
   column-gap: 2rem;
   text-align: left;

   &-column {
    h5 {
     font-family: "Inter", sans-serif !important;
     font-size: 18px;
    }
    ul {
     font-family: 'DM Sans', sans-serif!important;
     li {
      text-decoration: none;
      list-style: none;
      padding: 8px 0;
      font-size: 14px;
     }
     a {
      color: black;
      text-decoration: none;
     }
    }
   }
  }

  &-right {
   display: flex;
   flex-direction: column;
   gap: 2rem;
   text-align: right;
   font-family: 'DM Sans', sans-serif!important;

   &-socials {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 30px;
   }
   &-address{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 500;

    p{
     font-size: 15px;
    }
    a{
     color: black;
     text-decoration: none;
    }
   }
  }
 }
 .bottom {
  font-family: 'DM Sans', sans-serif!important;
  font-weight: 500;
  text-align: center;
  width: 80%;
  padding-top: 30px;
  margin:auto;
  p{
   padding-bottom: 25px;

  }
  small{
   color: #083E9E;
  }
 }
 @media screen and (max-width: 428px){
  margin: 2rem;
  .top{
   flex-direction: column;
   gap: 2.5rem;

   &-middle{
    grid-template-columns: repeat(2, auto);
   }
   &-right{
    text-align: left;
   }
  }
  .bottom{
   width: 100%;
   p{
    font-size: 14px;
   }
   small{
    font-size: 12px;
   }
  }
 }
 @media screen and (max-width: 960px){
  .top{
   flex-direction: column;
   gap: 2rem;

   &-middle{
    column-gap: .9rem;
   }

   &-right{
    text-align: left;
   }
  }
  .bottom{
   width: 100%;
  }
 }
 @media screen and (min-width: 1024px){
  .top{
   gap: 2rem;
   &-middle{
    grid-template-columns: repeat(3, 120px);
   }
  }
 }
`;
export default Footer;
