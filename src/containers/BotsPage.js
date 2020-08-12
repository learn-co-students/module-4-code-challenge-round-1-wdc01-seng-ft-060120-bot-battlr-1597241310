import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    displayBots: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots: bots.map(bot => {return {...bot, click: false}})}))
  }

  addBot = (bot) => {
    let disBots = [...this.state.bots]
    let displayedBots = disBots.find(newBot => {
      if (newBot.id === bot.id) {
        return newBot
      }})

      this.setState({
        displayBots: [...this.state.displayBots, displayedBots],
        added: true
      })
  
  }


  releaseBot = (bot) => {
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(() => this.removeBot(bot))
  }

  removeBot = (releasedBot) => {
    const bots = this.state.bots.filter(bot => bot.id !== releasedBot.id)
    this.setState({
      bots: bots
    })
  }

  render() {
    return <div>
      <YourBotArmy 
        bots={this.state.displayBots}
        releaseBot={this.releaseBot}
        addBot={this.addBot}
        removeBot={this.removeBot}
      />
      <BotCollection 
        bots={this.state.bots}
        addBot={this.addBot}
        releaseBot={this.releaseBot}
        
      />
      </div>;
  }
}

export default BotsPage;
