import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import Logo from "../public/img/logo.png";
import Language from "../public/img/language.png";
import Banner from "../public/img/banner/banner-1.jpg";
import Banner2 from "../public/img/banner/banner-2.jpg";

import Head from 'next/head';
import Category from '../components/category/category';
import FeaturedProduct from '../components/featured/featured';
import Blog from '../components/blog/blog';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import LatestProduct from '../components/product/latest-product';



const Home: NextPage = () => {
   
  return (
    <>
    
      {/* <div id="preloder">
          <div className="loader"></div>
      </div> */}
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
              <a href="#"><Image src={Logo} alt=""/></a>
          </div>
          <div className="humberger__menu__cart">
              <ul>
                  <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                  <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
              </ul>
              <div className="header__cart__price">item: <span>$150.00</span></div>
          </div>
          <div className="humberger__menu__widget">
              <div className="header__top__right__language">
                  <Image src={Language} alt=""/>
                  <div>English</div>
                  <span className="arrow_carrot-down"></span>
                  <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                  </ul>
              </div>
              <div className="header__top__right__auth">
                  <a href="#"><i className="fa fa-user"></i> Login</a>
              </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
              <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./shop-grid.html">Shop</a></li>
                  <li><a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                          <li><a href="./shop-details.html">Shop Details</a></li>
                          <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                          <li><a href="./checkout.html">Check Out</a></li>
                          <li><a href="./blog-details.html">Blog Details</a></li>
                      </ul>
                  </li>
                  <li><a href="./blog.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
              </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div className="header__top__right__social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-pinterest-p"></i></a>
          </div>
          <div className="humberger__menu__contact">
              <ul>
                  <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                  <li>Free Shipping for all Order of $99</li>
              </ul>
          </div>
      </div>
      
      <Header/>
      
      <Hero/>
    
      <Category/>
      
      <FeaturedProduct/>
      
      <div className="banner">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="banner__pic">
                          <Image src={Banner} alt=""/>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="banner__pic">
                          <Image src={Banner2} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
      <LatestProduct/>
    
      <Blog/>

      <Footer/>
      
    </>
  )
}

export default Home
