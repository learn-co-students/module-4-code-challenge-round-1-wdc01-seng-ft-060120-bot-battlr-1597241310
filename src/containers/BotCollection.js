import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => 
          <BotCard
          key={bot.id} 
          addToArmy={this.props.addToArmy}
          releaseFromService={this.props.releaseFromService} 
          bot={bot} /> )}
        </div>
      </div>
    );
  }
}

export default BotCollection;
