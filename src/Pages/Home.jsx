import React from 'react'
import styled from 'styled-components'
import Button from '../Components/Button/Button'

const Home = () => {

  return (
    <HomePage>
      <section className="textimg">
        <div className="text">
          <h3>
          The Better Way to Save & Invest.
          </h3>
          <p>
          PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.
          </p>
          <Button to="" name="Create free account"/>
          <div className="getapps">
            <Button to="https://apps.apple.com/ng/app/piggyvest/id1263117994" name="Get on iPhone" target="_blank" rel="noopener noreferrer"/>
            <Button to="https://play.google.com/store/apps/details?id=com.piggybankng.piggy" name="Get on Andriod" target="_blank" rel="noopener noreferrer"/>
          </div>
        </div>
        <div className="img"></div>
      </section>
    </HomePage>
  )
}

const HomePage = styled.main`
  .textimg{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
export default Home