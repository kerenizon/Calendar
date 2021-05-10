import React from 'react';
// import './index.css';

class LabelField extends React.Component {
  
  render(){
    return (
      <>
      <label className="labelForm">{this.props.content}</label>
      </> 
      );
  }
}

export default LabelField;
