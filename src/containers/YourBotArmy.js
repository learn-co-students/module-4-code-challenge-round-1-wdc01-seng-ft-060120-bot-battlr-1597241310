import React, { Component } from "react";
import BotsPage from "./BotsPage";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  
  generateArmy = () =>
  {
    const {bots,army,deenlist,destroy} = this.props

    let botArmy = []
    bots.forEach(bot => {
      army.includes(bot.id) 
      && botArmy.push(<BotCard bot={bot} onClick={deenlist} destroy={destroy} key={bot.id}/>)
    });
    return botArmy;
  }

 

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.generateArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
