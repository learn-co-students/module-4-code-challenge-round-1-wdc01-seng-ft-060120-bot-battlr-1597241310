import React from "react"
import BotCard from '../components/BotCard'

const BotCollection = props => {

  function renderBots() {
    return props.botList.map( ( b, idx ) =>
        <BotCard
          key={idx}
          bot={b}
          updateBotArmyList={ props.addToBotArmyList }
          deleteBot={ props.deleteBot }
        />
      )
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        { renderBots() }
      </div>
    </div>
  )
  
}

export default BotCollection;
