import React from "react";
import BotCard from "../components/BotCard.js";

const BotCollection = (props) => {

  const bots = props.displayBots.map((bot,index) => {
  	return <div className ="ui column">
      <BotCard key={bot.id} bot={bot} displayRobot={props.displayRobot}/>
          </div>
  });
  

    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {bots}
        </div>
      </div>
    );
  
}

export default BotCollection;
