import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Herosection from './Herosection';
import Features from './Features';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Herosection/>
    <Features/>
    <About/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
