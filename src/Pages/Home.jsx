import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button/Button";
import Card from "../Components/Card/Card";
import Girl from "/assets/girl.png";
import Security from "/assets/security.png";
import Savers from "/assets/savers.jpg";
import Invest from "/assets/invest.png";
import cardDetails from "../Components/Card/cardDetails";
import { RightArrow } from "../Components/Icons/icon";
import Investment from "../Components/Invest/Investment";
import Grow from "../Components/Grow/Grow";
import Customers from "../Components/Customers/Customers";
import Featured from "../Components/Featured/Featured";
import Footer from "../Components/Footer/Footer";


const Home = () => {
 return (
  <HomePage>
   <section className="textimg">
    <div className="text">
     <h3>The Better Way to Save & Invest.</h3>
     <p>
      PiggyVest helps over 4 million customers achieve their financial goals by
      helping them save and invest with ease.
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
    <div className="img">
     <img src={Girl} alt="girl" />
    </div>
   </section>
   <section className="security">
    <div>
     <img src={Security} alt="security" />
    </div>
    <div className="security-text">
     <h3>Your security is our priority</h3>
     <p>
      PiggyVest uses the highest level of Internet Security and it is secured by
      256 bits SSL security encryption to ensure that your information is
      comepletely protected from fraud.
     </p>
     <Link to="https://www.piggyvest.com/security" target="_blank">
      Learn more
     </Link>
    </div>
   </section>
   <section className="build">
    <div className="build-area">
     <h4>4 ways to build your savings</h4>
     <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
     <Button to="/flex" name="Start Saving" />
    </div>
    <div className="card-area">
     {cardDetails.map(({ topIcon, name, words, title, to }) => {
      return (
       <Card
        key={title}
        topIcon={topIcon}
        name={name}
        words={words}
        title={title}
        to={to}
       />
      );
     })}
    </div>
   </section>
   <Investment
    image={Invest}
    tag="Up To 25% Returns"
    title="Access investment opportunities"
    subtitle="Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities."
    link="Learn more about Investments"
    linkto="/invest"
    to=""
   />
   <Grow
    title="Meet the saver of the month!"
    subtitle="Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities."
    name="Meet the Oyetade's"
    image={Savers}
   />
   <Customers />
   <Featured />
   <Footer />
  </HomePage>
 );
};

const HomePage = styled.main`
 .textimg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-left: 6rem;
  margin-top: 3rem;

  .text {
   width: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
   h3 {
    font-family: "Inter", sans-serif !important;
    font-weight: 700;
    font-size: 60px;
    width: 70%;
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
  .img {
   width: 40%;
   position: relative;
   img {
    width: 70%;
   }
  }
 }
 .security {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  margin: 4rem auto;
  img {
   width: 150px;
  }
  .security-text {
   width: 50%;
   h3 {
    font-size: 35px;
    padding-bottom: 15px;
    line-height: 1.2;
   }
   p {
    font-size: 15px;
    padding-bottom: 10px;
   }
  }
 }
 .build {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;

  .build-area {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   justify-content: space-between;
   width: 30%;
   h4 {
    font-size: 40px;
    line-height: 1.3;
    width: 80%;
    padding-bottom: 15px;
   }
   p {
    font-size: 20px;
    line-height: 1.2;
    width: 80%;
    padding-bottom: 15px;
   }
   button {
    background-color: #0c1825;
    color: white;
    padding: 15px !important;

    &:hover {
     background-color: #0d60d8;
    }
   }
  }
  .card-area {
   width: 60%;
   display: grid;
   grid-template-columns: repeat(2, auto);
   row-gap: 2rem;
   gap: 2rem;
  }
 }
 .invest {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin: 4rem auto;
  padding: 0 20px;
  width: 75%;

  &-img {
   width: 50%;
   img {
    width: auto;
   }
  }
  &-text {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 1.5rem;

   h5 {
    font-family: "DM Sans", sans-serif !important;
    color: #7913e5;
    font-weight: 700;
   }
   h3 {
    font-family: "Inter", sans-serif !important;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
   }
   p {
    font-family: "DM Sans", sans-serif !important;
    font-weight: 400;
    font-size: 25px;
    line-height: 1.4;
   }
   a {
    font-family: "DM Sans", sans-serif !important;
    font-weight: 500;
    text-decoration: none;
    color: #7913e5;
    transition: all 1s ease-in;
    left: 0;
    &:hover {
     text-decoration: underline;
     left: 100px;
    }
   }
  }
 }
 .saver {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0d60d8;
  margin: 4rem 0;
  height: 500px;

  &-meet {
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
  &-picture {
   width: 40%;
   height: 100%;
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  }
 }

 /* exceptions */

 @media screen and (max-width: 428px) {
  .textimg {
   flex-direction: column;
   gap: 2rem;
   margin: 1rem;
   .text {
    width: 95%;
    text-align: center !important;
    h3 {
     width: 100%;
     font-size: 55px;
     /* line-height: 1.1; */
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
   .img {
    width: 100%;
    align-items: center;
    img {
     width: 100%;
    }
   }
  }
  .security {
   flex-direction: column;
   text-align: center;
   .security-text {
    width: 90%;
   }
  }
  .build {
   flex-direction: column;
   text-align: center;

   .build-area {
    width: 95%;
    h4 {
     width: 100%;
    }
    p {
     width: 100%;
    }
   }
   .card-area {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 85%;
   }
  }
  .invest {
   flex-direction: column;
   width: 90%;
   padding: 0 5px;

   &-img {
    width: 80%;
    img {
     width: 100%;
    }
   }
   &-text {
    text-align: center;
    h3 {
     font-size: 35px;
    }
    p {
     font-size: 20px;
    }
   }
  }
  .saver {
   flex-direction: column;
   height: 100%;
   align-items: center;
   &-meet {
    padding: 2rem 1rem;
    width: 100%;
    text-align: center;
    .another {
     width: 100%;
    }
    h2 {
     width: 100%;
     font-size: 30px;
    }
   }
   &-picture {
    width: 100%;
   }
  }
 }
 @media screen and (max-width: 960px) {
  .textimg {
   flex-direction: column;
   gap: 2rem;
   margin: 1rem;
   .text {
    width: 95%;
    text-align: center !important;
    h3 {
     width: 100%;
     font-size: 55px;
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
   .img {
    width: 80%;
    margin: 0 auto;
    align-items: center;
    img {
     width: 100%;
    }
   }
  }
  .security {
   flex-direction: column;
   text-align: center;
   .security-text {
    width: 90%;
   }
  }
  .build {
   flex-direction: column;
   text-align: center;

   .build-area {
    width: 95%;
    h4 {
     width: 100%;
    }
    p {
     width: 100%;
    }
   }
   .card-area {
    width: 85%;
   }
  }
  .invest {
   padding: 0 10px !important ;
   &-text {
    h3 {
     font-size: 45px;
    }
    p {
     font-size: 19px;
    }
   }
  }
  .saver {
  }
 }
`;
export default Home;
