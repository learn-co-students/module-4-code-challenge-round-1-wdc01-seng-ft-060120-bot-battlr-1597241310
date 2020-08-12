import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map(bot => 
              <BotCard bot={bot}
              clickBot={this.props.clickBot}
               />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
