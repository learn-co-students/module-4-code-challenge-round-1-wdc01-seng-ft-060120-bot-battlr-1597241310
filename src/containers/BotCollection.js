import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class BotCollection extends Component {
  //your code here
  generateBots = () => {
    
    this.props.bots.map(bot =>
      <BotCard 
      bot={bot}
      moveBot={props.addBot}
      deleteBot={props.deleteBot}
      />)
  }

  
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          { this.generateBots() }
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
