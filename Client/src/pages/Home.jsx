import React from 'react'
import Announcement from '../components/Announcement'
import Category from '../components/Category'
import Footer from '../components/Footer'
import NavBar from "../components/NavBar"
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Slider/>
        <Category/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
    
  )
}
export default Home