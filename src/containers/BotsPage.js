import React, { Component } from "react";
import BotCollection from './BotsPage.js';
import YourBotArmy from './YourBotArmy.js';

const API = 'http://localhost:6001/bots/'

class BotsPage extends Component {
  //start here with your code for step one
  constructor(props) {
    super(props)
  
    this.state = {
       bots: [],
       myBots: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(bots => 
      this.setState({
        bots: bots
      }))
  }

  addToMyBots = (bot) => {
    debugger
    let botList = [...this.state.myBots]
      if(!botList.includes(bot)){
        this.setState({
          myBots: botList
        })
    }
  }

  removeBotFromList = (bot) => {
    // i wouldve used debugger lol
    let botList = [...this.state.myBots]

      if(botList.includes(bot)){
        this.setState({
          myBots: botList.filter(thisBot =>
            bot !== thisBot)
        })
      }
  }

  deleteBotFromService = (bot) => {
    // i wouldve used debugger lol
    let botId = bot.id

    if(botList.includes(bot)){
      this.setState({
        myBots: botList.filter(thisBot =>
          bot !== thisBot)
      })
    }
    // deleteFetch
    fetch(API + botId, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
  }
  

  render() {
    return (
    <div>
      <YourBotArmy 
      bots={this.state.bots}
      myBots={this.state.myBots}
      removeBots={this.removeBotFromList}
      />
      <BotCollection 
      bots={this.state.bots} 
      addBots={this.addToMyBots}
      deleteBot={this.deleteBotFromService}
      />
    </div>
    )
  }
}

export default BotsPage;
