import React from "react";
import BotCard from '../components/BotCard'

const BotCollection = (props) => {

  const { bots, addBotToArmy, deleteRobotFromBackend } = props
  const allBotCards = bots.map(
    bot => {
      return (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          toggleArmy={addBotToArmy} 
          deleteRobotFromBackend={deleteRobotFromBackend} 
        />
    )
  })
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {allBotCards}
      </div>
    </div>
  )
}

export default BotCollection;
