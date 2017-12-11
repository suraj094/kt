import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }

  IncValue = (value) => {
    this.setState({counter: this.state.counter + value})
  }

  render(){
    return(
      <div>
        <Button incval={5} contfun={this.IncValue}/>
        <Button incval={10} contfun={this.IncValue}/>
        <Button incval={50} contfun={this.IncValue}/>
        <Button incval={100} contfun={this.IncValue}/>
        <Result count={this.state.counter} />
      </div>
    )
  }
}

class Button extends Component{

  countInc = () => {
    this.props.contfun(this.props.incval);
  }

  render(){
    return(
      <input type="button" value={this.props.incval} onClick={this.countInc}/>
    )
  }
}


const Result = (props) =>{
  return(
    <div>
      <input type="text" value={props.count} />
    </div>
  )
}
export default App;
