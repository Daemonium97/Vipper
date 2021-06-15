import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Logoo } from './components/Header'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route>
        <Header/>
        <Logoo ImageLogo="https://s1.1zoom.me/b5050/702/Cards_Closeup_poker_459976_1920x1080.jpg"/>
      </Route>

    </Switch>


  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

