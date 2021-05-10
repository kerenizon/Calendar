import React from 'react';
// import './index.css';

class InputSubmitField extends React.Component {

 

  render(){
    return (
      <>
        <input
        type="submit"
        value={this.props.content}
        className="convertBtn"
        >
        </input>
      </>
      );
  }
}

export default InputSubmitField;
