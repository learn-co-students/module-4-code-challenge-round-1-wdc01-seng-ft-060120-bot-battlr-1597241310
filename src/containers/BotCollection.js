import React, { Component } from "react";
import BotCard from '../components/BotCard'



class BotCollection extends Component {
  //your code here

  fetchBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard bots={this.props.bot} />
    })
  }

  render() {
    const bots = this.props.bots

    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => {
            return <BotCard bot={bot} recruitBot={this.props.recruitBot}
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
