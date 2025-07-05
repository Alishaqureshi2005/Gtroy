import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Header from './component/header'
import Footer from './component/footer'
import { Audio, Flashsale, Newarrivals,  ProductPage,  Project, Smartphone, Topselling } from './pages'





 
const App = () => {
  return (
  
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Flashsale' element={<Flashsale/>}/>
        <Route path='/Newarrivals' element={<Newarrivals/>}/>
        <Route path='/smartphone' element={<Smartphone/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/Topselling' element={<Topselling/>}/>
        <Route path='/Product' element={<ProductPage/>}/>
        <Route path='/Audio' element={<Audio/>}/>



      </Routes>
      <Footer/>
      </BrowserRouter>
  
  )
}

export default App
