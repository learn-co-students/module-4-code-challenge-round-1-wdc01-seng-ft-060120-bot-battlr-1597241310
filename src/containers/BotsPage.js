import React, { Component } from "react";
import BotCollection from './BotCollection' 
import YourBotArmy  from './YourBoyArmy'

const BOTSAPI = "http://localhost:6001/bots"

class BotsPage extends Component {
  //start here with your code for step one

constructor(){
  super()
  this.state = {
    bots: [],
    myBots: [] //my personal roster
  }
}

componentDidMount(){
  fetch(BOTSAPI)
  .then(res => res.json())
  .then(bots => {
    this.setState({
      bots: bots
    })
  })
}

recruitBot = (bot) => {
  // conditional of the deliverable that only can be enlisted once
  //trying to push ONLY if it is NOT in the roster of myBots yet
  if(!this.state.myBots.includes(bot)){
    return this.setState(state => {
      state.myBots.push(bot)
      return state
    })
  }

}
  render() {
    return(
      <div>
        <YourBotArmy myBots={this.state.myBots} />
        <BotCollection bots={this.state.bots} recruitBot={this.recruitBot}>
      </div>;
    ); 
 }
}

export default BotsPage;
