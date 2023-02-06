import React from 'react'
import styled from "styled-components"
import crunch from "/assets/crunch.png"
import guardian from "/assets/guardian.png"
import point from "/assets/point.png"

const Featured = () => {
  return (
    <FeaturedIn>
     <div className='title'>
      <h1>As featured in</h1>
     </div>
     <div className='images'>
      <a href="">
       <img src={point} alt="" />
      </a>
      <a href="">
       <img src={guardian} alt="" />
      </a>
      <a href="">
       <img src={crunch} alt="" />
      </a>
     </div>
    </FeaturedIn>
  )
}
const FeaturedIn = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 align-content: center;
 text-align: center;
 margin: 3rem auto;
 padding:3rem 2rem;
 background-color: #f9f9f9;

 .title{

 }
 .images{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  place-items: center;
  img{
   width: 170px;
   image-rendering: pixelated;
  }
 }
 @media screen and (max-width: 428px){
  flex-direction: column;
  gap: 3rem;
  .images{
   grid-template-columns: repeat(1, 1fr);
   row-gap: 2rem;
  }
 }
 @media screen and (max-width: 960px){
  flex-direction: column;
  gap: 3rem;
 } 
`
export default Featured