import React from 'react';
// import './index.css';
import LabelField from './LabelField';
import InputField from './InputField';
import InputSubmitField from './InputSubmitField';

class Form extends React.Component {

  onBtnContinue = (e) => {
    e.preventDefault();
    this.props.showResults(e);
  }

  render(){
    return (
      <div className="formDiv">       
        <form onSubmit={this.onBtnContinue}>
          <h2>Enter Gregorian date:</h2>
          <LabelField content="Day:"/>
          <InputField /> <br/>
          <LabelField content="Month:"/>
          <InputField /><br/>
          <LabelField content="Year:"/>
          <InputField /><br/>
          <InputSubmitField content="Convert"/>
        </form>
      </div> 
      );
  }
}

export default Form;
