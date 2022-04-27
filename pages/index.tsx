import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import Logo from "../public/img/logo.png";
import Language from "../public/img/language.png";


import Head from 'next/head';
import Category from '../components/category/category';
import FeaturedProduct from '../components/featured/featured';
import Blog from '../components/blog/blog';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import LatestProduct from '../components/product/latest-product';
import Banner from '../components/banner/banner';
import FooterProduct from '../components/product/footer-products';



const Home: NextPage = () => {
   
  return (
    <>
    
      {/* <div id="preloder">
          <div className="loader"></div>
      </div> */}
      
      <Header/>
      
      <Hero/>
    
      <Category/>
      
      <FeaturedProduct/>
      
      <Banner/>
    
      <FooterProduct/>
    
      <Blog/>

      <Footer/>
      
    </>
  )
}

export default Home
