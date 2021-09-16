import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
