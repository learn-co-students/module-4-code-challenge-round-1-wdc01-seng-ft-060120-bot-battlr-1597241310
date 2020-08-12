import React, { Component } from "react";
import BotCard from "../components/BotCard.js";


class BotCollection extends Component {
  

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot=><BotCard key={bot.id} bot={bot} moveBot={this.props.addBots} permDelBot={this.props.permDelBot}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
