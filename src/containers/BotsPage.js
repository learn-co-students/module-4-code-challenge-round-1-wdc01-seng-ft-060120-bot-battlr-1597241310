import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


class BotsPage extends Component {

  constructor() {
    super();
    this.API = 'http://localhost:6001/bots'
    this.state = {
      bots: [],
      myArmy: [],
      enlisted: []
    }
  }

  componentDidMount() {
    fetch(this.API)
      .then(resp => resp.json())
      .then(json => this.setState({ bots: json }))
  }

  render() {
    return <div>
      <YourBotArmy myArmy={this.state.myArmy} discharge={this.discharge}/>
      <BotCollection bots={this.state.bots} enlist={this.enlist}/>
    </div>;
  }

  enlist = (botId) => {
    if(!this.state.enlisted.includes(botId)){
      const myBot = this.state.bots.find(bot => botId === bot.id)
      this.setState({
        myArmy: [...this.state.myArmy, myBot],
        enlisted: [...this.state.enlisted, botId]
      })
    }
  }

  discharge = (botId) => {
    if(this.state.enlisted.includes(botId)){

      const newArmy = this.state.myArmy.filter(bot => bot.id !== botId)
      const newEnlisted = this.state.enlisted.filter(id => id !== botId)

      this.setState({
        myArmy: newArmy,
        enlisted: newEnlisted
      })
    }
  }

  deleteForever = (botId) => {
    
  }
}

export default BotsPage;
