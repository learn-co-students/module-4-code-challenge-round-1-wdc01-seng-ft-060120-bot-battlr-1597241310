import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const BASE_URL = 'http://localhost:6001/'
const BOTS_URL = BASE_URL + 'bots/'

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch(BOTS_URL)
    .then(response => response.json())
    .then(bots => this.setState({bots}))
  }

  getArmy = () => {
    let bots = [...this.state.bots]
    let army = [...this.state.army]
    
    return bots.filter(bot => {return army.includes(bot.id)})
  }

  addBotToArmy = (id) => {
    let army = [...this.state.army]

    if (!army.includes(id)) {
      army.push(id)
    }

    this.setState({army})
  }

  removeBotFromArmy = (id) => {
    let army = [...this.state.army].filter(bot => {return bot !== id})
    this.setState({army})
  }

  deleteRobotFromBackend = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'content-type': 'applications/json'
      }
    }

    fetch(`${BOTS_URL}${id}`, options)
    .then(response => response.json())
    .then(bot => this.removeBotFromBots(id))
  }

  removeBotFromBots = (id) => {
    let bots = [...this.state.bots].filter(b => {return b.id !== id})
    let army = [...this.state.army].filter(b => {return b.id !== id})

    this.setState({bots, army})
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          bots={this.getArmy()} 
          removeBotFromArmy={this.removeBotFromArmy}
          deleteRobotFromBackend={this.deleteRobotFromBackend}
        />
        <BotCollection 
          bots={this.state.bots} 
          addBotToArmy={this.addBotToArmy}
          deleteRobotFromBackend={this.deleteRobotFromBackend}
        />
      </div>
    )
  }
}

export default BotsPage;
