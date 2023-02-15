import React from "react";
import styled from "styled-components";

const PageTransitions = ({ children }) => {
 return (
  <PAGETRANSITIONS className="page-transition">{children}</PAGETRANSITIONS>
 );
};

const PAGETRANSITIONS = styled.div`
 position: relative;

 > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-out;
 }
`;
export default PageTransitions;
