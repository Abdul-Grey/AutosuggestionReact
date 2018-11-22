import React, {Component} from 'react';
import Countries from './Countries.js';
import AutoCompleteStyle from './AutoCompleteStyle.css';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    }
  }

  getText = (inputEvent) => {
    if (inputEvent.target.value.length > 0) {
      let textValue = inputEvent.target.value;
      let expression = new RegExp(inputEvent.target.value, 'i')
      let listArray = [...Countries].map(country => country.match(expression)).filter(country => country != null).map(country => country.input)
      this.setState((currentState) => ({
        suggestions: [...listArray],
        text: textValue
      }))
    } else {
      this.setState({suggestions: [], text: ''})
    }
  }

  setText=(country)=>{
    this.setState(()=>({
      suggestions:[],
      text: country
    }))
  }

  render() {
    return (<div id='mainContainer'>
      <input type='search' value={this.state.text} onChange={this.getText} placeholder='Type here' id='inputField'/>
      <ul id='suggestions'>
        {
          this.state.suggestions.map((suggestion, index) =>< li key = {
            index
          } onClick={()=>this.setText(suggestion)}> {
            suggestion
          }</li>)
        }
      </ul>
    </div>);
  }
}

export default AutoComplete;
