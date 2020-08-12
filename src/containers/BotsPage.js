import React, { Component } from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

let BASEURL = "http://localhost:6001/bots/"
class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = ({
      robots: [],
      botArmy: []
    })
  }

  componentDidMount() {
    fetch(BASEURL)
    .then(response => response.json())
    .then(robotData => this.setState({robots: robotData}))
  }

  render() {
    return (<div>
    <YourBotArmy botArmy={this.state.botArmy} 
    releaseBotFromArmy={this.releaseBotFromArmy}
    botArmy={this.state.botArmy}
    dischargeBot={this.dischargeBot}/>

    <BotCollection robots={this.state.robots} 
    addBotToArmy={this.addBotToArmy}
    botArmy={this.state.botArmy}
    dischargeBot={this.dischargeBot}
    releaseBotFromArmy={this.releaseBotFromArmy}/>
    </div>);
  }

  addBotToArmy = (e, bot) => {
    e.preventDefault()
    if (!this.state.botArmy.includes(bot)) {
      
      let botArmy = [...this.state.botArmy, bot]
      this.setState({
        botArmy
    })
    } else {
      alert("Sorry! You've already added this bot!")
    }
  }

  releaseBotFromArmy = (e, releaseBot) => {
    e.preventDefault()
    if (this.state.botArmy.includes(releaseBot)) {
      let botArmy = [...this.state.botArmy]
      this.setState({
        botArmy: botArmy.filter(bot => 
          {if (bot.id !== releaseBot.id) { return bot}})
      })
    }
  }

  dischargeBot = (e, dischargeBot) => {
    e.preventDefault()
    let dischargeUrl = BASEURL + dischargeBot.id 
    let bots = [...this.state.robots]
    let botArmy = [...this.state.botArmy]

    fetch(dischargeUrl, {method: 'DELETE'})
    .then(response => response.json())
    .then(res => {alert(`${dischargeBot.name} has been discharged forever.`)
      this.setState({
        botArmy: botArmy.filter(bot => {
          if (bot.id !== dischargeBot.id) {
            return bot
          } 
        }),
        robots: bots.filter(bot => {
          if (bot.id !== dischargeBot.id) {
            return bot
          }
        })
      })
    })
  }
}

export default BotsPage;
