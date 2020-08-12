import React, { Component } from "react";
import BotSpecs from "../components/BotSpecs"



class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
        {this.props.AllBots.map( bot => <BotSpecs 
        bot = {bot}
        addBotToArmy={this.props.addBotToArmy}
        />)}
   
 
        </div>
      </div>
    );
  }
}

export default BotCollection;
