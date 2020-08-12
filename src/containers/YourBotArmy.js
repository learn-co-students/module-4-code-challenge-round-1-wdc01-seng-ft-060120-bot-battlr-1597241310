import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = (props) => {
  const {myArmyBots, displayBots, displayRobot} = props;

  const renderBots = myArmyBots.map((id, index) => {
  	let bot = displayBots.find(bot => bot.id === id)
  	return (
      <div key={index} className="ui three wide column">
        <BotCard cardType="remove" displayRobot={displayRobot} bot={bot}/>
      </div>
    )
  });

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {renderBots}
          </div>
        </div>
      </div>
    );
}

export default YourBotArmy;
