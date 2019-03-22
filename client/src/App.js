import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Quote />
        <Footer />
      </div>
    );
  }
}

export default App;
