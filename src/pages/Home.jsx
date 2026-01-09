import React from 'react'
import Hero from '../component/Hero'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Menu from './../component/Menu';
import Banner from './Banner';
import Categories from './Categories';
import Product from './Product';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Header/>
        <Menu/>
        <Banner/>
        <Categories />
        <Product/>
        <Footer/>
      
    </div>
  )
}

export default Home
