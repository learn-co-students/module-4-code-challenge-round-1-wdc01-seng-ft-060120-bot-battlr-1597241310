import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.props.botArmy.map(bot => <BotCard bot={bot} 
            releaseBotFromArmy={this.props.releaseBotFromArmy}
            botArmy={this.props.botArmy}
            dischargeBot={this.props.dischargeBot}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
