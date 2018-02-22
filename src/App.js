import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">I am an app</h1>
        </header>
        <Accordion>
          <div>
            <h1>SECTION 1</h1>
            <p>This is a section of the accordion.</p>
            <p>It has multiple tags inside this one section.</p>
          </div>
          <div>
            <h1>SECTION 2</h1>
            <p>Each section can have whatever it wants – does not have to follow same format.</p>
            <p>For example, this accordion section has an image.</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Accordion>
        <Accordion>
          <div>
            <h1>ANOTHER SECTION 1</h1>
            <p>This is a section of another accordion.</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <h1>ANOTHER SECTION 2</h1>
            <p>Still customizable!</p>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Accordion>
      </div>
    );
  }
}

export default App;
