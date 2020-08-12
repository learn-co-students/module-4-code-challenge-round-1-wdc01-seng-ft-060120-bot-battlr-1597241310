import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  renderBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard 
        bot={bot}
        toggleBot={this.props.removeBot}
        deleteBot={this.props.deleteBot}
      />
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
