import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class YourBotArmy extends Component {
  
  generateBotArmy = () => {
    // might be something wrong here, i need to test.  
    // not sure if i should use props.bots or how i have below
    this.props.myBots.map(bot => 
      <BotCard 
      bot={bot} 
      moveBot={this.props.removeBots}
      />
      )
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.generateBotArmy() }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
