import React, {Component} from 'react';

class ToggleText extends Component {
  constructor(props) {
    super(props)
    this.countries = [...props.countries];
    this.state={
      message: props.message,
      isHidden: false
    }
    console.log(this.countries);
  }
  toggleText=()=>{
    this.setState((currentState)=>({isHidden: !currentState.isHidden}))
    this.countries.map(country=>console.log('Country: '+country));
  }

  render(){
    return (
      <div id='dynamicText'>
        <p id='message'>{this.state.isHidden?this.state.message:null}</p><br/>
        <button id='toggleButton' onClick={()=>this.toggleText()}>Toggle Text</button>
      </div>
        )
  }
}

export default ToggleText;
