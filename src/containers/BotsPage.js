import React, { Component } from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const url = `http://localhost:3000/bots`;

class BotsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      bots: null,
      displayBots: [],
      myArmyBots: [],
      currentBot: null
    }
  }
  
  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(resp => this.setState({
      displayBots: resp
    }))
  }

  clickRobot = (id) => {
    let newArmy = this.state.myArmyBots.slice();
    newArmy.push(id);
    this.setState({
      bots: true,
      myArmyBots: newArmy,
      currentBot: null
    })
  }

  displayRobot = (id) => {
    this.setState({
      bots: false,
      currentBot: id
    })
  };

  allBots = () => {
    this.setState({
      currentBot: null,
      bots: true
    })
  };

  render() {
    let displayedBot = this.state.currentBot ? this.state.displayBots.find(bot => bot.id === this.state.currentBot) : null;

    return( 
    <div>
    <BotCollection displayBots={this.state.displayBots} displayRobot={this.displayRobot} clickRobot={this.clickRobot}/>
    <BotSpecs bot={displayedBot} clickRobot={this.clickRobot} bots={this.allBots}/>
    <YourBotArmy myArmyBots={this.state.myArmyBots} displayRobot={this.displayRobot} displayBots={this.state.displayBots}/>
    </div>
    )
  }
}

export default BotsPage;
