import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }

 IncValue = (value) => {
    this.setState({counter: this.state.counter + value})
 }
  render() {
    return (
      <div className="App">
        <Button Inc={1} IncVal={this.IncValue}/>
        <Button Inc={5} IncVal={this.IncValue}/>
        <Button Inc={10} IncVal={this.IncValue}/>
        <Button Inc={100} IncVal={this.IncValue}/>
        <Result res={this.state.counter} />
      </div>
    );
  }
}


class Button extends Component{
  constructor(props){
    super(props);
  }

  countInc = () =>{
    this.props.IncVal(this.props.Inc)
  }

  render(){
    return(
        <input type="button" value={this.props.Inc} onClick={this.countInc} />
    )
  }
}


const Result = (props) =>{
  return(
    <div>
      <input type="text" value={props.res}/>
    </div>
  )
}
export default App;
