import React from 'react'
import './App.css';
import Characters from './components/Characters'
import Header from './components/Header';
import logo from './img/banner.png'

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <img src={logo}/>
        <Header/>
      <Characters/>
      </section>
    </div>
  );
}

export default App;
