import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  //your code here
  // renderBots = () => {
  //   this.props.bots.map( bot => <BotCard bot={bot}/>)
  // }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map( bot => <BotCard bot={bot} addBot={this.props.addBot} removeBot={this.props.removeBot}/> )}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
