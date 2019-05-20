import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import LoginEmployee from './components/LoginEmployee/LoginEmployee'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <LoginEmployee />
      <Footer />
    </div>
  );
}

export default App;
