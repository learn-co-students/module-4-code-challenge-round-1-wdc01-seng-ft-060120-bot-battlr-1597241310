import React, { Component } from "react";
import BotSpecs from "../components/BotSpecs"



class BotCollection extends Component {
  //your code here
  // let NewBot = this.props.AllBots.map(bot )
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
           <BotSpecs />
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
