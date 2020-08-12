import React, { Component } from "react";
import BotCard from '../components/BotCard';

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          Collection of all bots
          {this.props.robots.map(bot => <BotCard bot={bot} key={bot.id} 
          addBotToArmy={this.props.addBotToArmy} 
          botArmy={this.props.botArmy}
          dischargeBot={this.props.dischargeBot}
          releaseBotFromArmy={this.props.releaseBotFromArmy}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
