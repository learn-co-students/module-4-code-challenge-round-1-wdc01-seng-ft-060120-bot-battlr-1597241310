import React, { Component } from "react";
import BotCard from '../components/BotCard'

function YourBotArmy(props) {
  //your bot army code here...
  const showMyArmy = () => {
    return props.myArmy.map(bot => <BotCard 
      bot = { bot }
      addToMyArmy = { props.addToMyArmy}
      onArmy = { true}
    />)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {showMyArmy()}
        </div>
      </div>
    </div>
  );
}



export default YourBotArmy;
