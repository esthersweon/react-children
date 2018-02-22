import React, { Component } from 'react';
import './Accordion.css';

class Accordion extends Component {
  render() {
    return (
      <div className="Accordion">
        {this.props.children.map(child => {
          return <div style={{padding: 20, border: '1px solid black'}}>{ child }</div>;
        })}
      </div>
    );
  }
}

export default Accordion;
