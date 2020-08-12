import React, { Component } from "react";
import BotCard from "../components/BotCard";

function BotCollection(props) {
  
  const botSelection = () => {
    return props.botList.map( bot => <BotCard 
      bot = { bot }
      addToMyArmy = { props.addToMyArmy}
      //was going to be used in the onClick for a ternary if false the it gets added if true it gets removed
      onArmy = {false}
    />)
  }


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {botSelection()}
      </div>
    </div>
  );
}


export default BotCollection;
