import React from "react"
import BotCard from '../components/BotCard'

const YourBotArmy = props => {

  function renderBots() {
    return props.botArmyList.map( ( b, idx ) =>
        <BotCard
          key={idx}
          bot={b}
          updateBotArmyList={ props.removeFromBotArmyList }
          deleteBot={ props.deleteBot }
        />
      )
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          { renderBots() }
        </div>
      </div>
    </div>
  )
  
}

export default YourBotArmy;
