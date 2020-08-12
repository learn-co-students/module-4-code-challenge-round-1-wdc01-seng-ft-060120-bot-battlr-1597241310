import React, { Component } from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";

const BASEURL = "http://localhost:6001/bots"


class BotsPage extends Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      addedBots: [],
    }
  }

  componentDidMount(){
    fetch(BASEURL)
    .then(response=>response.json())
    .then(bots=>{
      this.setState({
        bots
      })
    })
  }

  addBots = (bot) => {
    let addedBots = [...this.state.addedBots]
    addedBots.push(bot)
    this.setState({
      addedBots: addedBots
    })
  }

  delBot = (dbot) => {
    let remainingBots = [...this.state.addedBots]
    remainingBots = remainingBots.filter(bot=> bot !== dbot)
    this.setState({
      addedBots: remainingBots
    })
  }

  permDelBot=(bot)=>{
    fetch(BASEURL + `/${bot.id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bot),
    })
    .then(resp=>resp.json)
    .then(console.log)
  }
 
  render() {
    return <div>
      <YourBotArmy addedBots={this.state.addedBots} delBot={this.delBot}/>
      <BotCollection bots={this.state.bots} addBots={this.addBots} permDelBot={this.permDelBot}/>
      </div>;
  }
  
}

export default BotsPage;
