import React, { Component } from 'react';

export default class ThisLogger extends Component {
  constructor(){
    super()
    this.state = {
      testing: 'testing'
    }
  }

  testing = () => {
    console.log('This function is inside the ThisLogger component and bound to this', this)
  }

  thisTesting() {
    console.log('This function is inside the ThisLogger component, is not bound and is invoked inside of ThisLogger', this)
  }

  render() {
    return(
      <div>
        <button onClick={() => {this.testing()}}>Click me to invoke ThisLogger.testing!</button>
        <button onClick={() => {this.props.testing()}}>Click me to invoke App.testing!</button>
        <button onClick={() => {this.props.thisTesting()}}>Click me to invoke ThisLogger.thisTesting!</button>
        <button onClick={() => {this.thisTesting()}}>Invoke thisTesting!</button>
      </div>
    )
  }
}
