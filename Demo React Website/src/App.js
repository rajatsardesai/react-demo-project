import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Service } from './Service';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer/>
    </>
  )
}