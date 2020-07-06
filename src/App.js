import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label for="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicled")}} />
      </React.Fragment>
    )
  }
}

export default App;
