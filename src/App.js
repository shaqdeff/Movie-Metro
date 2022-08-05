import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
