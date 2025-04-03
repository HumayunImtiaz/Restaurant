import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Product from './components/Product'
import Review from './components/Review'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Footer from './components/footer'
import './assets/css/style.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App