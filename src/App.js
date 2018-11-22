import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ToggleText from './ToggleText.js';
import AutoComplete from './AutoComplete.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoComplete/>
      </div>
    );
  }
}

export default App;

//
// class A [extends B]{
//   constructor(props){
//     super(props);
//   }
//  If you're not using props in the constructor then it's useless and remove it from the class
//  And by default react sets props
// }
