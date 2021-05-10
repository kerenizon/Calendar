import React from 'react';
import '../App.css';
import '../index.css';
import Form from './Form';
import calenderApi from '../api/calenderApi';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {dateResult: [], gday:'', gmonth:'', gyear: '' , convertDates :false, errorMessage:''};
  }
  

  fetchFromApi = async (gday,gmonth,gyear) => {
    const g2hResponse = await calenderApi.get('',{
      params: {
        "g2h": 1,
        "gd": `${gday}`,
        "gm": `${gmonth}`,
        "gy": `${gyear}`
      }     
    }).catch(err => { this.setState({errorMessage: err.message})});
    if (this.state.errorMessage === ''){
      this.setState({dateResult: g2hResponse.data.hebrew, convertDates: true});
    }else{
      this.setState({dateResult: 'Inappropriate date, try again!', convertDates: true, errorMessage:''});
    }
    
  }


  displayResultHandle = (e) => {
    const formArr = e.target.children;
    this.fetchFromApi(formArr[2].value,formArr[5].value,formArr[8].value);
  }


  render(){
    return (
      <div className="container">
        <h1>Gregorian to Hebrew Calendar Converter</h1>
        <div className="subContainer" >
          <Form showResults={this.displayResultHandle}/>
          {this.state.convertDates && <p>{this.state.dateResult}</p>}
        </div>
      </div>
      );
  }
}

export default App;
