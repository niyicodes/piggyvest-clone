import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LeftArrow } from "../Components/Icons/icon";

const InvestmentPage = ({ Investments }) => {
 const { id } = useParams();
 const [investment] = Investments.filter(investment => investment.id === id);
 return (
  <div className="investment">
   <h3 className="investment-arrow"><LeftArrow /> Investify</h3>
   <div className="investment-card">

   </div>
  </div>
 );
};

export default InvestmentPage;
