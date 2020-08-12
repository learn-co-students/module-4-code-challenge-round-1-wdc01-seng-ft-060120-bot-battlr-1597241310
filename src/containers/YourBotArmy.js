import React, { Component } from "react";
import BotCard from "../components/BotCard.js";


class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.addedBots.length > 0 ? this.props.addedBots.map(bot=><BotCard bot={bot} moveBot={this.props.delBot}/>) :null}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
