import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card/Card";
import Customers from "../Components/Customers/Customers";
import Featured from "../Components/Featured/Featured";
import Footer from "../Components/Footer/Footer";
import Grow from "../Components/Grow/Grow";
import Investment from "../Components/Invest/Investment";
import piggyGuide from "../Components/Invest/piggyGuide";
import flex1 from "/assets/flex1.png"
import flexImage from "/assets/flexImage.png"

const Flex = () => {
  useEffect(() => {
    document.title = "Flexible Savings with Flex Naira™ - PiggyVest";
  }, []);
  return (
    <FlexPage>
   <Investment
    image={flex1}
    title="Flex Naira"
    subtitle="Flexible savings for life's emergencies. Free transfers and withdrawals. Earn up to 8% p.a."
    button="Start Saving Today"
    to="/"
   />
   <section className="build">
    <div className="build-area">
     <h4 className="animate__animated animate__flipInX">Be better prepared for emergencies.</h4>
     <p>Building an emergency fund helps hedge against life’s risks and can help reduce frivolous spending.</p>
    </div>
    <div className="card-area">
     {piggyGuide.map(({ topIcon, name, words }) => {
      return <Card key={name} topIcon={topIcon} name={name} words={words} />;
     })}
    </div>
   </section>
   <Grow
    title="Stay prepared for life's emergencies"
    subtitle="Give your emergency funds a boost! We know that emergencies can happen anytime. Building an emergency fund in Flex Naira helps you to stay ahead, so you can avoid borrowing or extra financial burden when there is a crisis. Best of all, you earn interests."
    image={flexImage}
   />
   <Customers />
   <Featured />
   <Footer />
  </FlexPage>
  )
}
const FlexPage = styled.main`
  .reverse{
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
    background-color: #EA4FA2;
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
 .saver{
   background-color:#EA4FA2 ;
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
export default Flex