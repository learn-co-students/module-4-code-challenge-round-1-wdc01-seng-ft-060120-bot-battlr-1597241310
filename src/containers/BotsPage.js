import React, { Component } from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

let API = "http://localhost:6001/bots"
class BotsPage extends Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state ={
      bots: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(bots => {
      this.setState({
        bots
      })
    })
  }

  render() {
    return <div>
      <YourBotArmy />
      <BotCollection AllBots={this.state.bots}/>
      
      
      
      
      </div>;
  }
}

export default BotsPage;
