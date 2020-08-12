import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection"

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
       bots: [],
       displayBots: [],
       botsClicked: []
    }
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/bots")
    .then( res => res.json() )
    .then( bots => this.setState({
      bots: bots,
      displayBots: bots
    }))
  }

  addBot = (bot) => {
    if(!this.state.botsClicked.includes(bot)) { 
    this.setState({
      botsClicked: [...this.state.botsClicked, bot]
    })
  }
  }

  removeBot = (bot) => {
  
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE"
    })
    // let indexOfBot = this.state.bots.indexOf(bot)
    let filteredBots = this.state.bots.filter(bot => this.state.bots.includes(bot))
    this.setState({
      displayBots: filteredBots,
      bots: filteredBots
    })
  }




  render() {
    return <div>
      <YourBotArmy 
      botsClicked={this.state.botsClicked}
      removeBot={this.removeBot}
      />
    
      <BotCollection 
      bots={this.state.displayBots}
      addBot={this.addBot}
      removeBot={this.removeBot}
      />

    </div>;
  }
}

export default BotsPage;
