// npm modules
import React, { Component } from 'react';
// components
import Routes from "./Components/Routes";

class App extends Component {
  // AuthKey = document.cookie.AuthKey || null;

  render() {

    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
