import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AllInvestmentsArea from "../Components/AllInvestments/AllInvestmentsArea";
import Button from "../Components/Button/Button";
import { LeftArrow } from "../Components/Icons/icon";
import person from "/assets/icon.png";
import verified from "/assets/verified.png";

const InvestmentPage = ({ Investments }) => {
 const { id } = useParams();
 const [investment] = Investments.filter((investment) => investment.id === id);
 const navigate = useNavigate();
 useEffect(() => {
  document.title = `${investment.name}™ - PiggyVest`;
 }, []);
 return (
  <Investmentpage className="investmentPage">
   <Investment>
    <div className="investment">
     <h3 className="investment-arrow" onClick={() => navigate("/invest")}>
      <LeftArrow /> Investify
     </h3>
     <div className="investment-card">
      <img src={investment.image} alt="" className="investment-card-image" />
      <div className="investment-card-details">
       <div className="investment-card-details-absolute">
        <img
         src={person}
         alt=""
         className="investment-card-details-absolute-img"
        />
        <h6>
         verified Opportunity
         <img src={verified} alt="" />
        </h6>
       </div>
       <div className="investment-card-details-normal">
        <h3>{investment.name}</h3>
        <small>By an investment company</small>
        <div className="investment-card-details-normal-detail">
         <div className="per">
          <h4>{investment.per}</h4>
          <small>Per Unit</small>
         </div>
         <div className="investors">
          <h4>{investment.investors}</h4>
          <small>Investors</small>
         </div>
         <div className="returns">
          <h4>{investment.rate}%</h4>
          <small>Returns</small>
         </div>
        </div>
        <Button to="" name="Invest Now" />
       </div>
      </div>
     </div>
    </div>
   </Investment>
   <AllInvestmentsArea />
  </Investmentpage>
 );
};

const Investment = styled.main`
 display: flex;
 flex-direction: column;
 margin: 0 auto 3rem auto;
 align-items: center;
 /* height: 100vh; */

 .investment {
  border-radius: 15px;
  border: 2px solid gray;
  padding: 4rem 2rem 2rem 2rem;
  width: 48%;
  /* height: 100%; */

  &-arrow {
   align-items: center;
   font-size: 2.5rem;
   color: #7913e5;

   svg {
    color: #7913e5 !important;
   }
  }
  &-card {
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding-top: 2rem;

   &-image {
    width: 100%;
   }
   &-details-absolute {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;

    &-img {
     position: absolute;
     top: -100px;
     left: 10px;
     width: 150px;
     background-color: white;
     padding: 5px;
     border-radius: 8px;
    }
    h6 {
     margin-left: auto;
     font-size: 15px;
     color: #7913e5;
    }
   }
   &-details-normal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-evenly;

    h3 {
     font-size: 25px;
     line-height: 1.2;
    }
    small {
     font-size: 18px;
    }

    &-detail {
     display: flex;
     justify-content: space-evenly;
     margin: 2rem 0;
     gap: 1rem;
     h4 {
      font-size: 22px;
     }
     .per,
     .investors,
     .returns {
      padding: 10px 35px !important;
     }
     .per,
     .investors {
      color: black;
      background-color: rgba(197, 206, 220, 0.2);
      small {
       color: #60708a;
      }
     }
     .returns {
      color: #07b98d;
      background-color: #07b98d15;
      small {
       color: #07b98d;
      }
     }
    }
    button {
     width: 100%;
     padding: 15px 15px !important;
     background-color: #7913e5;
     color: white;
    }
   }
  }
 }
 @media screen and (max-width: 428px) {
  margin: 2rem 1rem;

  .investment {
   width: 100%;

   &-card {
    padding-top: 1rem;

    &-details-absolute {
     &-img {
      width: 70px;
      left: 0;
      top: -70px;
     }
    }
    &-details-normal {
     h3 {
      font-size: 20px;
     }
     small {
      font-size: 13px;
     }
     &-detail {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 10px;
      h4 {
       font-size: 20px;
      }
      .per,
      .investors,
      .returns {
       padding: 8px 30px !important;
      }
     }
    }
   }
  }
 }
 @media screen and (max-width: 960px) {
  margin: 2rem 1rem;

  .investment {
   width: 80%;

   &-card {
    padding-top: 1rem;
    &-details-normal {
     h3 {
      font-size: 30px;
     }
     small {
      font-size: 15px;
     }
    }
   }
  }
 }
`;
const Investmentpage = styled.main`
 height: 100%;
 width: 100%;
`;
export default InvestmentPage;
