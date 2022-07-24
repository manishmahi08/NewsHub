import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* <Route path="/">
              <News />
            </Route>
            <Route path="/about">
              <About />
            </Route> */}
            <Route path="/" element={<News />} />
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

