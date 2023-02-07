import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Piggybank from "./Pages/Piggybank";
import Safelock from "./Pages/Safelock";
import Flex from "./Pages/Flex";
import Invest from "./Pages/Invest";
import Stories from "./Pages/Stories";
import FAQ from "./Pages/FAQs";
import InvestmentPage from "./Pages/InvestmentPage";
import Target from "./Pages/Target";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import investments from "./Components/Invest/investments";
import Featured from "./Components/Featured/Featured";

function App() {
 const [Investments, setInvestments] = useState(investments);
 return (
  <div className="">
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/piggybank" element={<Piggybank />} />
    <Route path="/safelock" element={<Safelock />} />
    <Route path="/targets" element={<Target />} />
    <Route path="/flex-naira" element={<Flex />} />
    <Route path="/invest" element={<Invest Investments={Investments} />} />
    <Route path="/stories" element={<Stories />} />
    <Route path="/faq" element={<FAQ />} />
    <Route
     path="/invest/:id"
     element={<InvestmentPage Investments={Investments} />}
    />
   </Routes>
   <Featured />
   <Footer />
  </div>
 );
}

export default App;
