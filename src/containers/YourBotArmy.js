import React, { Component } from "react";
import BotCard from "../components/BotCard"

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.armyBots.map(bot => 
            <BotCard 
            key={bot.id}
            handleArmy={this.props.handleArmy} 
            releaseFromService={this.props.releaseFromService}
            bot={bot} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
