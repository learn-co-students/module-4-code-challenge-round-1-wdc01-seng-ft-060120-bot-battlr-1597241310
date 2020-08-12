import React, { Component } from "react";

class BotCollection extends Component {
  //your code here
  generateBots = () => {
    this.props.bots.map(bot =>
      <BotCard 
      bot={bot}
      addBot={props.addBot}
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
