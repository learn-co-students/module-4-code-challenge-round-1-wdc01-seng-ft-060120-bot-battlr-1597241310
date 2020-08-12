import React, { Component } from "react";

import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const BOTS = "http://localhost:6001/bots/" 

class BotsPage extends Component {
  state = {
    bots: [],
    army: []
  }
  
  enlist = (id) =>
  {
    const {army} = this.state
    if (!army.includes(id))
    this.setState({army: [...army,id]})
  }
  
  deenlist = (id) =>
  {
    const army = [...this.state.army].filter(_id => _id != id)
    this.setState({army})
  }

  destroy = (id) =>
  {
    const {bots} = this.state
    fetch(BOTS + id,{method: "DELETE"})
    .then(r => r.json())
    .then(this.setState({bots: [...bots].filter(bot => bot.id != id)}))
  }
  
  componentDidMount()
  {
    fetch(BOTS)
    .then(r => r.json())
    .then(json => this.setState({bots: json}))
  }

  render() {
    const {bots,army} = this.state
    return <div>
        <YourBotArmy  bots={bots} 
                      army={army} 
                      deenlist={this.deenlist}
                      destroy={this.destroy}
        />
        <BotCollection  enlist={this.enlist} 
                        bots={bots} 
                        destroy={this.destroy}
        />
      </div>;
  }
}

export default BotsPage;
