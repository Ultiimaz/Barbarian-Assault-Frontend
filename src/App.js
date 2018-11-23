// npm modules
import React, { Component } from 'react';


// components
import Canvas from './Components/Canvas';
import LandingPage from './Components/LandingPage'

class App extends Component {
  AuthKey = document.cookie.AuthKey || null;
  render() {
    console.log(!this.AuthKey);
    if(!this.AuthKey || this.AuthKey == null)
    {
      return (<LandingPage />);
    }
    return (
      <div className="App">
        <Canvas/>
      </div>
    );
  }
}

export default App;
