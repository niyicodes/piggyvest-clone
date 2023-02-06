import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimoCard from "../TestimonialCard/TestimoCard";
import testimonies from "../TestimonialCard/testimonials";
import Button from "../Button/Button";

const Customers = () => {
 const settings = {
  dots: false,
  arrows: false,
  vertical: true,
  infinite: true,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 50,
  verticalSwiping: true,
  slidesToShow: 1.5,
  slidesToScroll: 2,
  cssEase: "linear",
 };
 return (
  <CustomersSection>
   <div className="customers-slider">
    <Slider {...settings}>
     {testimonies.map(({ date, image, name, testimony }) => {
      return (
       <TestimoCard
        key={image}
        date={date}
        image={image}
        name={name}
        testimony={testimony}
       />
      );
     })}
    </Slider>
   </div>
   <div className="customers-text">
    <h3>4 Million + customers</h3>
    <p>
     Since launching in 2016, over 4,000,000 people have used PiggyVest to
     manage their money better, avoid over-spending and be more accountable.
    </p>
    <Button to="/register" name="Create free account" />
    <div className="getapps">
     <Button
      to="https://apps.apple.com/ng/app/piggyvest/id1263117994"
      name="Get on iPhone"
      target="_blank"
      rel="noopener noreferrer"
     />
     <Button
      to="https://play.google.com/store/apps/details?id=com.piggybankng.piggy"
      name="Get on Andriod"
      target="_blank"
      rel="noopener noreferrer"
     />
    </div>
   </div>
  </CustomersSection>
 );
};

const CustomersSection = styled.section`
 width: 100%;
 display: flex;
 justify-content: space-around;
 /* gap: -1rem; */
 align-items: center;
 margin: 4rem auto;

 .customers-slider {
  width: 45%;
  .slick-slide {
   margin: 2rem;
   padding: 0;
   float: center;
   width: 100%;
  }
 }
 .customers-text {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  h3 {
   font-family: "Inter", sans-serif !important;
   font-weight: 700;
   font-size: 50px;
   width: 90%;
   line-height: 1.3;
   color: #0c1825;
  }
  p {
   font-family: "DM Sans", sans-serif !important;
   font-weight: 400;
   line-height: 1.3;
   width: 70%;
   font-size: 20px;
   text-align: justify;
  }
  button {
   border: none;
   outline: none;
   padding: 18px 30px !important;
   background-color: #0c1825;
   color: white;

   &:hover {
    background-color: #0d60d8;
   }
  }
  .getapps {
   display: flex;
   gap: 1rem;
   button {
    background-color: transparent;
    color: black;
    border: 1px solid grey;
    padding: 10px 15px;
   }
  }
 }

 @media screen and (max-width: 428px) {
  flex-direction: column-reverse;
  gap: 3rem;
  width: 90%;
  margin: auto !important;

  .customers-slider {
   width: 100%;
   .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100% !important;
   }
  }
  .customers-text {
   width: 95%;
   text-align: center !important;
   align-items: center;
   h3 {
    width: 100%;
    font-size: 40px;
   }
   p {
    width: 100%;
    font-size: 15px;
    text-align: center !important;
   }

   .getapps {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto !important;
    width: 50px;
   }
  }
 }
 @media screen and (max-width: 960px) {
  flex-direction: column-reverse;
  gap: 3rem;
  width: 90%;
  margin: auto !important;

  .customers-slider {
   width: 95%;
   .slick-slide {
    margin-top: 1rem;
    width: 100%;
   }
  }
  .customers-text {
   width: 95%;
   text-align: center !important;
   align-items: center;
   h3 {
    width: 100%;
    font-size: 40px;
   }
   p {
    width: 100%;
    font-size: 15px;
    text-align: center !important;
   }

   .getapps {
    flex-direction: column;
   }
  }
 }
`;
export default Customers;
