import React, { Component } from "react";

import BotCard from "../components/BotCard"

class BotCollection extends Component {
  
  generateBots = () =>
  {
    const {bots,enlist,destroy} = this.props
    return bots.map(bot => <BotCard bot={bot} onClick={enlist} destroy={destroy} key={bot.id}/>)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.generateBots()}          
        </div>
      </div>
    );
  }
}

export default BotCollection;
