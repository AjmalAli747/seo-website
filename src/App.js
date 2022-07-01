import React from 'react'
import Navbar from './Components/Pages/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Pages/Home';
import Service from './Components/Pages/Service';
import Page from './Components/Pages/Page';
import Portfolio from './Components/Pages/Portfolio';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/page' element={<Page />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App