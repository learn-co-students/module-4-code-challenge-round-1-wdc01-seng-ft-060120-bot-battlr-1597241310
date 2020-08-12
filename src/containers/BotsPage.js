import React, { Component } from "react";

import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const BOTS = "http://localhost:6001/bots/" 

class BotsPage extends Component {
  state = {
    bots: [],
    army: [],
    show: -1
  }
  
  enlist = (id) =>
  {
    const {army} = this.state
    if (!army.includes(id))
    this.setState({army: [...army,id], show: -1})
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

  
  showBot = (id) =>
  {
    this.setState({show: id})
  }
  showCollection = () =>
  {
    this.setState({show: -1})
  }

  collectionOrShow = () =>
  {
    const {show,bots} = this.state
    if(show < 0)
    {
      return <BotCollection onClick={this.showBot}
                            bots={bots} 
                            destroy={this.destroy}
      />
    }else
    {
      const bot = bots.find(bot => bot.id === show)
      return <BotSpecs  bot={bot} 
                        enlist={this.enlist}
                        goBack={this.showCollection}
                        />
    }
  }
  
  render() {
    const {bots,army} = this.state
    return <div>
        <YourBotArmy  bots={bots} 
                      army={army} 
                      deenlist={this.deenlist}
                      destroy={this.destroy}
        />
        {this.collectionOrShow()}
      </div>;
  }
}

export default BotsPage;
