import React, { useEffect } from "react";
import styledComponents from "styled-components";
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
    <h3>Recently verified customer stories</h3>
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
const StoriesPage = styledComponents.main`
  
`;
export default Stories;
