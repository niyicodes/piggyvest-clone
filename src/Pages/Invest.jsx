import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Investment from "../Components/Invest/Investment";
import InvestImage from "/assets/invest.png";
import investGuide from "../Components/Invest/investGuide";
import Card from "../Components/Card/Card";
import Grow from "../Components/Grow/Grow";
import growImage from "/assets/grow.png";
import { useNavigate } from "react-router-dom";
import AllInvestmentsArea from "../Components/AllInvestments/AllInvestmentsArea";
import Customers from "./../Components/Customers/Customers";

const Invest = ({ Investments }) => {
 const navigate = useNavigate();
 useEffect(() => {
  document.title = "Invesst in bits and on the go with investify™ - PiggyVest";
 }, []);
 return (
  <InvestPage>
   <Investment
    image={InvestImage}
    title="Invest on the go"
    subtitle="Invest securely and confidently on the go.Up to 25% returns, 6-12 month duration."
    button="Start Saving Today"
    to="/invest"
   />
   <section className="build">
    <div className="build-area">
     <h4>Simple investments with great returns</h4>
     <p>Investments are made readily accessible to everyone</p>
    </div>
    <div className="card-area">
     {investGuide.map(({ topIcon, name, words }) => {
      return <Card key={name} topIcon={topIcon} name={name} words={words} />;
     })}
    </div>
   </section>
   <Grow
    title="We’ve made it easier for anyone to get started."
    subtitle="With as little as NGN5000, you can now access pre-vetted low-medium risk primary and secondary investment opportunities. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety."
    image={growImage}
   />
   <AllInvestmentsArea />
   <Customers />
  </InvestPage>
 );
};

const InvestPage = styled.main`
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
    background-color: #7913e5;
    padding: 15px !important;
    border-radius: 8px;
    color: white;
    font-size: 18px;
   }
  }
 }
 .build {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin: 3rem;

  &-area {
   text-align: center;
   h4 {
    font-size: 40px;
    padding-bottom: 10px;
    line-height: 1.1;
   }
   p {
    font-size: 17px;
   }
  }
  .card-area {
   display: grid;
   grid-template-columns: repeat(3, auto);
   column-gap: 2rem;

   .card {
    background-color: #f9f9f9;
    h2 {
     font-family: "Inter", sans-serif !important;
     font-size: 18px;
     font-weight: 700;
    }
    p {
     font-family: "DM Sans", sans-serif !important;
     font-weight: 400;
     text-align: justify;
     color: #353535;
    }
   }
  }
 }
 .saver {
  background-color: #7913e5;

  &-meet {
   width: 60%;
   padding: 2rem;
   h2 {
    font-family: "Inter", sans-serif !important;
    font-weight: 700;
    font-size: 45px;
    line-height: 1.1;
   }
   p {
    font-family: "DM Sans", sans-serif !important;
    font-weight: 400;
    width: 80%;
   }
  }
  &-picture {
   width: 40%;
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
  .build {
   margin: 1rem;

   &-area {
    h4 {
     font-size: 30px;
     line-height: 1.2;
    }
   }
   .card-area {
    grid-template-columns: repeat(1, auto);
    row-gap: 1.3rem;
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
     width: 90%;
    }
    h2 {
     width: 100%;
     font-size: 28px;
     padding-bottom: 10px;
    }
    p {
     width: 100%;
     font-size: 12px;
     padding-top: 10px;
    }
   }
   &-picture {
    width: 100%;
   }
  }
 }
 @media screen and (max-width: 960px) {
  .reverse {
   flex-direction: column-reverse;
   text-align: center;
   .invest-text {
    p {
     width: 100%;
    }
   }
  }
  .build {
   .card-area {
    column-gap: 1rem;
    text-align: center;

    .card {
     padding: 20px 20px;
     text-align: center;
     h2 {
      font-size: 15px;
     }
     p {
      font-size: 14px;
      text-align: center;
     }
    }
   }
  }
  .saver {
   &-meet {
    padding: 1rem 1rem;
    .another {
     width: 95%;
    }
    h2 {
     font-size: 30px;
     width: 100%;
    }
    p {
     font-size: 17px;
     text-align: justify;
    }
   }
  }
 }
`;
export default Invest;
