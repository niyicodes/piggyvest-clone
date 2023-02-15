import React, { useEffect } from "react";
import styled from "styled-components";
import Featured from "../Components/Featured/Featured";
import Footer from "../Components/Footer/Footer";
import Investment from "../Components/Invest/Investment";
import stories from "/assets/stories.png";
import TestimoCard from "../Components/TestimonialCard/TestimoCard";
import testimonials from "../Components/TestimonialCard/testimonials";
const Stories = () => {
 useEffect(() => {
  document.title = "PiggyVest Stories™ - PiggyVest";
 }, []);
 return (
  <StoriesPage>
   <Investment
    image={stories}
    title="Loved by our Customers"
    subtitle="Stories of happy savers who PiggyVest has helped or is helping save for what truly matters to them."
    button="Add your story"
    to="/invest"
   />
   <section className="stories">
    <h3 className="animate__animated animate__flipInX">
     Recently verified customer stories
    </h3>
    <div className="stories-area">
     {testimonials.map(({ date, image, name, testimony }) => {
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
    </div>
   </section>
   <Featured />
   <Footer />
  </StoriesPage>
 );
};
const StoriesPage = styled.main`
 .reverse {
  flex-direction: row-reverse;
  .invest-text {
   h3 {
    font-family: "Inter", sans-serif !important;
    font-size: 60px;
    font-weight: 700;
   }
   p {
    font-family: "DM Sans", sans-serif !important;
    font-size: 17px;
    font-weight: 400;
    width: 60%;
   }
   button {
    background-color: black !important;
    padding: 15px !important;
    border-radius: 8px;
    color: white;
    font-size: 18px;
   }
  }
 }

 .stories{
  h3{
   font-size: 40px;
   padding-bottom: 15px;
   text-align: center;
  }

  &-area{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
   row-gap: 2rem;
   margin: 2rem 5rem;

   > div{
    width: 500px;
    height: auto;
    .person{
     display: flex;
    flex-direction: column!important;
    &-Details{
     h4{
      font-size: 20px;
     }
     p{
      font-size: 17px;
     }
    }
    }
   }
  }
 }

 @media screen and (max-width: 428px) {
  .reverse {
   flex-direction: column-reverse;
   .invest-text {
    h3 {
     font-size: 55px;
    }
    p {
     width: 100%;
    }
   }
  }

  .stories{
   &-area{
    grid-template-columns: repeat(1, 1fr);
    margin: 2rem 1rem;

    > div{
     width: auto;
    }
   }
  }
 }
 @media screen and (max-width: 960px) {
  .reverse {
   flex-direction: column-reverse;
   text-align: center;
   .invest-img{
    width: auto;
   }
   .invest-text {
    p {
     width: 100%;
    }
   }
  }
  .stories{
   &-area{
    grid-template-columns: repeat(1, 1fr);
    margin: 2rem 1rem;
    >div{
     width: auto;
    }
   }
  }
 }
`;
export default Stories;
