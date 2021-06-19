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
import money from './blog_images/blog-investing.jpg'
import web from './blog_images/blog-professional-web.jpg'
import mf from './blog_images/blog-sportsbook-bussiness.jpg'
import phone from './blog_images/blog-grow-betting.jpg'
import { Header, Logoo, NavBar } from './components/Header'
import { Home, Business, Premium, WhyVip, FullSet, Register, BlogHome, Payments, Join } from './views/Home'
import {Footer} from './components/Footer'
import {About} from './views/About'
import {Benefits} from './views/Benefits'
import {Betting_Software} from './views/Betting_Software'
import {Software_Features} from './views/Software_Features' 
import {Products} from './views/Products'
import {Promos} from './views/Promos'
import {Blog, BlogView} from './views/Blog'



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
      <Route exact path="/Benefits">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={benefits} TitleName="Benefits"/>
        <Benefits/>
        <Footer/>
      </Route>
      <Route exact path="/Betting_Software">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={betting} TitleName="BETTING SOFTWARE"/>
        <Betting_Software/>
        <Footer/>
      </Route>
      <Route exact path="/Blog">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={blog} TitleName="BLOG"/>
        <Blog/>
        <Footer/>
      </Route>
      <Route exact path="/Blog_money">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={blog} TitleName="BLOG"/>
        <BlogView ImageNews={money}/>
        <Footer/>
      </Route>
      <Route exact path="/Blog_web">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={blog} TitleName="BLOG"/>
        <BlogView ImageNews={web}/>
        <Footer/>
      </Route>
      <Route exact path="/Blog_fut">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={blog} TitleName="BLOG"/>
        <BlogView ImageNews={mf}/>
        <Footer/>
      </Route>
      <Route exact path="/Blog_phone">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={blog} TitleName="BLOG"/>
        <BlogView ImageNews={phone}/>
        <Footer/>
      </Route>

      <Route exact path="/Contact">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={contact} TitleName="CONTACT"/>
        <Footer/>
      </Route>
      <Route exact path="/Products">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={products} TitleName="PRODUCTS"/>
        <Products/>
        <Footer/>
      </Route>
      <Route exact path="/Promo">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={promo} TitleName="Promos"/>
        <Promos/>
        <Footer/>
      </Route>
      <Route exact path="/Software_Features">
        <Header/>
        <NavBar/>
        <Logoo ImageLogo={software} TitleName="SOFTWARE FEATURES"/>
        <Software_Features/>
        <Footer/>
      </Route>

    </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);



