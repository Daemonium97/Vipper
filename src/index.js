import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Logoo, NavBar } from './components/Header'
import { Home, Business, Premium, WhyVip, FullSet, Register, BlogHome, Payments, Join } from './views/Home'
import {Footer} from './components/Footer'



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
        <Logoo ImageLogo="https://f.vividscreen.info/soft/b369907c79cb1bb9aef2f088fb6e0dcd/Hello-Kitty-1920x1080.jpg" TitleName="About Us" />
      </Route>

    </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);



