import React from "react";
import BotCard from '../components/BotCard'

const YourBotArmy = (props) => {
  
  const { bots, removeBotFromArmy, deleteRobotFromBackend } = props
  const allBotCards = bots.map(
    bot => {
      return (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          toggleArmy={removeBotFromArmy}
          deleteRobotFromBackend={deleteRobotFromBackend} 
        />
      )
    }) 

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {allBotCards}
        </div>
      </div>
    </div>
  )
}

export default YourBotArmy;
