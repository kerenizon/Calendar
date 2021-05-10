import React from 'react';
// import './index.css';

class InputField extends React.Component {
  state = {term: ''}
  render(){
    return (
      <>
      <input
       type="text" 
       style={{padding: '5px 0px', margin: '5px'}} 
       value={this.state.term} 
       onChange={e => {
        this.setState({term: e.target.value});
       }}
       > 
       </input>
      </>
      );
  }
}

export default InputField;
