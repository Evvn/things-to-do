import React, { Component } from 'react';
import './App.css';
import Task from './Task.js'
import Header from './Header.js'
import Footer from './Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Task />
        <Footer />
      </div>
    );
  }
}

export default App;
