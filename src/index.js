import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import about from './pages_images/about-us.jpg'
import benefits from './pages_images/benefits.jpg'
import betting from './pages_images/betting-software.jpg'
import blog from './pages_images/Blog.jpg'
import contact from './pages_images/contact.jpg'
import products from './pages_images/products.jpg'
import promo from './pages_images/promo.jpg'
import software from './pages_images/software-features.jpg'
import { Header, Logoo, NavBar } from './components/Header'
import { Home, Business, Premium, WhyVip, FullSet, Register, BlogHome, Payments, Join } from './views/Home'
import {Footer} from './components/Footer'
import {About} from './views/About'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Header />
        <NavBar />
        <Home />
        <Business />
        <Premium />
        <WhyVip />
        <FullSet />
        <Register />
        <BlogHome />
        <Payments />
        <Join />
        <Footer />
      </Route>
      <Route exact path="/About">
        <Header />
        <NavBar />
        <Logoo ImageLogo={about} TitleName="About Us"/>
        <About/>
        <Footer/>
      </Route>

    </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);



