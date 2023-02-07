import React, { useEffect } from 'react'
import styledComponents from 'styled-components';
import Button from '../Components/Button/Button';
import Customers from '../Components/Customers/Customers';
import Featured from '../Components/Featured/Featured';
import Footer from '../Components/Footer/Footer';

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQs - PiggyVest";
  }, []);
  return (
    <FAQS>
      <section className="group">
        <h3>FREQUENTLY ASKED QUESTIONS</h3>
        <div className="questions">
          <div className="question">
            <h3>here we go</h3>
            <Button to="" name="answer"/>
          </div>
        </div>
      </section>
      <Featured />
      <Customers />
      <Footer />
    </FAQS>
  )
}

const FAQS = styledComponents.main`
  
`
export default FAQ