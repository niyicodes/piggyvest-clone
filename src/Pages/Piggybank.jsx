import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card/Card";
import Customers from "../Components/Customers/Customers";
import Featured from "../Components/Featured/Featured";
import Footer from "../Components/Footer/Footer";
import Grow from "../Components/Grow/Grow";
import Investment from "../Components/Invest/Investment";
import piggyGuide from "../Components/Invest/piggyGuide";
import piggy1 from "/assets/piggy1.png"
import saveImage from "/assets/saveImage.png"

const Piggybank = () => {
 useEffect(() => {
  document.title = "Save Automatically on PiggyVest™ - PiggyVest";
 }, []);
 return (
  <PiggybankPage>
   <Investment
    image={piggy1}
    title="Piggybank"
    subtitle="Strict daily, weekly or monthly automatic savings. Earn up to 10% p.a."
    button="Start Saving Today"
    to="/"
   />
   <section className="build">
    <div className="build-area">
     <h4>Save without thinking about it.</h4>
     <p>Enjoy automated savings, quick manual savings top up and competitive interest rates.</p>
    </div>
    <div className="card-area">
     {piggyGuide.map(({ topIcon, name, words }) => {
      return <Card key={name} topIcon={topIcon} name={name} words={words} />;
     })}
    </div>
   </section>
   <Grow
    title="Build your savings small small!"
    subtitle="Save periodically, automatically or manually. You can also save as you go, on your own terms. You’re the boss of your savings, choose how you want to save."
    image={saveImage}
   />
   <Customers />
   <Featured />
   <Footer />
  </PiggybankPage>
 );
};
const PiggybankPage = styled.main`
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
    background-color: #0D60D8;
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
   background-color:#0D60D8 ;
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
export default Piggybank;
