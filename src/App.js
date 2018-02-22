import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React's this.props.children</h1>
        </header>
        <Accordion>
          {/* Everything between opening / closing tag of Accordion is considered its children */}
          {/* You can access this using `this.props.children` in the Accordion component */ }
          
          {/* This div is the first child of this Accordion */}
          <div>
            <h1>SECTION 1</h1>
            <p>This is a section of the accordion.</p>
            <p>It has multiple tags inside this one section.</p>
          </div>

          {/* This div is the second child of this Accordion */}
          <div>
            <h1>SECTION 2</h1>
            <p>Each section can have whatever it wants – does not have to follow same format.</p>
            <p>For example, this accordion section has an image.</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Accordion>

        {/* This is another accordion */}
        <Accordion>
          {/* This div is the first child of this Accordion */}
          <div>
            <h1>ANOTHER SECTION 1</h1>
            <p>This is a section of another accordion.</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          {/* This div is the first child of this Accordion */}
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
