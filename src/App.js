import React, { Component } from 'react';
import './App.css';
import UserInput from './UserIO/UserInput'
import UserOutput from './UserIO/UserOutput'

class App extends Component {
  state = {
    UserOutputs: [
      { name: "Apple", price: "2$", madeIn: "US", initialName: "Apple" },
      { name: "Orange", price: "1$", madeIn: "Canada", initialName: "Orange" },
      { name: "Watermelon", price: "$5", madeIn: "Japan", initialName: "Watermelon" }
    ]
  }

  itemChangeHandler = (event) => {
    this.setState( {
      UserOutputs: [
        { name: event.target.value, price: "5$", madeIn: "US" },
        { name: "Mandarin", price: "11$", madeIn: "China" },
        { name: "Melon", price: "$5", madeIn: "Thai" }
      ]
    } )
  }

  render() {
    return(
      <div className="App">
        <UserInput changed={this.itemChangeHandler} />

        <UserOutput 
          name={this.state.UserOutputs[0].name} 
          price={this.state.UserOutputs[0].price} 
          madeIn={this.state.UserOutputs[0].madeIn} 
          initialName={this.state.UserOutputs[0].initialName} />
        
        <UserOutput 
          name={this.state.UserOutputs[1].name} 
          price={this.state.UserOutputs[1].price} 
          madeIn={this.state.UserOutputs[1].madeIn} 
          initialName={this.state.UserOutputs[1].initialName} />
        
        <UserOutput 
          name={this.state.UserOutputs[2].name} 
          price={this.state.UserOutputs[2].price} 
          madeIn={this.state.UserOutputs[2].madeIn} 
          initialName={this.state.UserOutputs[2].initialName} />
      </div>
    )
  }
}

export default App;
