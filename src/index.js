import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Logoo, NavBar } from './components/Header'
import {Home, Business, Premium, WhyVip, FullSet} from './views/Home'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Header/>
        <NavBar/>
       <Home/>
       <Business/>
       <Premium/>
       <WhyVip/>
      <FullSet/>
      </Route>
      <Route exact path="/About">
      <Header/>
      <NavBar/>
      <Logoo ImageLogo="https://f.vividscreen.info/soft/b369907c79cb1bb9aef2f088fb6e0dcd/Hello-Kitty-1920x1080.jpg" TitleName="About Us" />
      </Route>

    </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

