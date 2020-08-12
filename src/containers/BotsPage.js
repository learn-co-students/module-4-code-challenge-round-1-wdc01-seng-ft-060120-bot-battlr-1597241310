import React, { Component } from "react";
import BotsCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
const url = "http://localhost:6001/bots"
class BotsPage extends Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      armyBots: []
    };
  }
  componentDidMount() {
    fetch(url)
    .then(r => r.json())
    .then(bots => this.setState({
      bots: bots
    }))
  }

  render() {
    return <div>
      <YourBotArmy 
      handleArmy={this.handleArmy} 
      releaseFromService={this.releaseFromService}
      armyBots={this.state.armyBots} />
      <BotsCollection 
      handleArmy={this.handleArmy} 
      releaseFromService={this.releaseFromService}
      bots={this.state.bots} /> 
      </div>;
  }

  handleArmy = (e, clickedBot) => {
    if (e.target.type !== "submit") {
      if (this.state.armyBots.includes(clickedBot)) {
        const newBotArray = this.state.armyBots.filter(bot => bot.id !== clickedBot.id )
        this.setState({
          armyBots: newBotArray
        })
      } else {
      this.setState({ armyBots: [...this.state.armyBots, clickedBot] })
      }
    }
  }

  releaseFromService = (bot) => {
    const deleteRequest = {
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json",
        Accept: "application/json"
      }
    }
    fetch(`${url}/${bot.id}`, deleteRequest)
    .then(r => r.json())
    .then(this.handleRemoval(bot))
  }

  handleRemoval = (passedBot) => {
    const newBotArmy = this.state.armyBots.filter(bot => bot.id !== passedBot.id);
    const newBotArray = this.state.bots.filter(bot => bot.id !== passedBot.id);
    this.setState({
      bots: newBotArray,
      armyBots: newBotArmy
    })
  }
}

export default BotsPage;
