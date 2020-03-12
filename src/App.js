import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="container text-center">
      <Clock />
    </div>
    
    )
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.now = new Date();


    this.state = {
     time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    }

    this.refresh = this.refresh.bind(this);
  }

  refresh(){
    this.now = new Date();
    this.setState((state) =>({
     time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    }));
  }
  render(){
    return <p onClick={this.refresh}>{this.state.time}</p>
  }

}

export default App;
