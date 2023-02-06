import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Piggybank from './Pages/Piggybank'
import Safelock from './Pages/Safelock'
import Flex from './Pages/Flex'
import Invest from './Pages/Invest'
import Stories from './Pages/Stories'
import FAQ from './Pages/FAQs'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Target from './Pages/Target'
import Navbar from "./Components/Navbar/Navbar"
import Featured from './Components/Featured/Featured'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/piggybank' element={<Piggybank />} />
        <Route path='/safelock' element={<Safelock />} />
        <Route path='/targets' element={<Target />} />
        <Route path='/flex-naira' element={<Flex />} />
        <Route path='/invest' element={<Invest />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
      <Featured />
      <Footer />
    </div>
  )
}

export default App
