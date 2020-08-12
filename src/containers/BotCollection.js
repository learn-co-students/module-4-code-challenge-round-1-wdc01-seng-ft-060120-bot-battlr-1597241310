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
          handleArmy={this.props.handleArmy}
          releaseFromService={this.props.releaseFromService} 
          bot={bot} /> )}
        </div>
      </div>
    );
  }
}

export default BotCollection;
