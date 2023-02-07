import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card/Card";
import investments from "../Invest/investments";

const AllInvestmentsArea = () => {
 const navigate = useNavigate();
 return (
  <AvailableInvestmentArea>
   <section className="investments">
    <h2>Recent Opportunities on Investify</h2>
    <div className="investments-area">
     {investments.map(
      ({ name, per, investors, availabilty, image, onClick, id, rate }) => {
       return (
        <Card
         key={id}
         name={name}
         per={per}
         investors={investors}
         image={image}
         availabilty={availabilty}
         onClick={() => navigate(`/invest/${id}`)}
        />
       );
      }
     )}
    </div>
   </section>
  </AvailableInvestmentArea>
 );
};

const AvailableInvestmentArea = styled.section`
 .investments {
  margin: 4rem;

  h2 {
   text-align: center;
   padding: 40px 0;
   font-size: 40px;
  }

  &-area {
   display: grid;
   grid-template-columns: repeat(3, auto);
   column-gap: 1.5rem;
   row-gap: 3rem;
   margin-top: 3rem;
   place-content: center;

   .card {
    gap: 0.5rem;
    background-color: #f9f9f9;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    line-height: 1.2;
    &:hover {
     -webkit-box-shadow: 6px 8px 17px -2px #d6d6d6;
     box-shadow: 6px 8px 17px -2px #d6d6d6;
     transition: all 0.6s ease;
    }
    &:hover span {
     transform: translateX(0);
    }
    img {
     width: 100%;
     height: 30%;
     object-fit: cover;
    }
    h2 {
     font-family: "Inter", sans-serif !important;
     font-weight: 700;
     font-size: 23px;
     text-align: left;
     padding: 0 20px;
    }

    &-info {
     padding: 0 20px;
     display: flex;
     flex-direction: column;
     /* justify-content: space-evenly; */
     gap: 1rem;

     &-details {
      display: flex;
      gap: 5rem;
      text-align: justify;

      div span {
       display: flex;
       flex-direction: column;
       font-family: "DM Sans", sans-serif !important;
       h5 {
        font-size: 23px;
        font-weight: 700;
       }
       small {
        text-align: left;
        font-size: 15px;
        font-weight: 400;
       }
      }
     }
     h6 {
      font-size: 23px;
      margin-top: 1rem;
      color: #b32e58;
      display: inline-flex;
      text-align: center;
      span {
       border-radius: 12px;
       background-color: rgba(179, 46, 88, 0.07);
       padding: 10px 25px;
      }
     }
    }
   }
  }
 }
 @media screen and (max-width:428px){
  .investments {
   margin: 1rem;

   h2 {
    padding: 20px 0;
    line-height: 1.1;
    font-size: 30px;
   }

   &-area {
    display: flex;
    flex-direction: column;
    
    .card {
     h2 {
      font-size: 20px;
     }
     &-info {
      &-details {
       text-align: left;
      }
     }
    }
   }
  }
 }
 @media screen and (max-width: 960px){
  .investments {
   margin: 3rem;

   &-area {
    grid-template-columns: repeat(2, auto);
   }
  }
 }
`;
export default AllInvestmentsArea;
