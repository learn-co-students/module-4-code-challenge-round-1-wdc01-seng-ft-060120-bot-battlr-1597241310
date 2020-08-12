import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  renderBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard 
        bot={bot}
        toggleBot={this.props.addBot}
        deleteBot={this.props.deleteBot}
      />
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
