import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label for="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicled")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
