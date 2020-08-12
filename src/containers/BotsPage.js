import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const BASEURL = "http://localhost:6001/bots/"

class BotsPage extends Component {

  state = {
    bots: [],
    myArmy: [],
  }

  componentDidMount(){
    fetch(BASEURL)
    .then(resp =>  resp.json())
    .then(bots => {
      this.setState({
        bots
      })
    })
  }

  addBot = (target, bot) => {
    if (target.tagName === "BUTTON"){ return }
    if (this.state.myArmy.includes(bot)){
      alert("Already on your squad, boss!")
      return
    }
    let updatedArmy = [...this.state.myArmy, bot]
    this.setState({
      myArmy: updatedArmy
    })
  }

  removeBot = (target, bot) => {
    if (target.tagName === "BUTTON"){ return }
    let updatedArmy = this.state.myArmy.filter(mybot => mybot !== bot )
    this.setState({
      myArmy: updatedArmy
    })
  }

  deleteBot = (bot) => {
    let newBots = this.state.bots.filter(mybot => mybot !== bot )
    let newArmy = this.state.myArmy.filter(mybot => mybot !== bot )
    let deleteURL = `${BASEURL}${bot.id}`
    let config = {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    }
    fetch(deleteURL, config)
    .then(resp => resp.json())
    .then(emptyObj => {
      this.setState({
        bots: newBots,
        myArmy: newArmy,
      })
    })

  }

  render() {
    return( 
    <div>
      <YourBotArmy 
        bots={ this.state.myArmy }
        removeBot={ this.removeBot }
        deleteBot={ this.deleteBot }
      />
      <BotCollection 
        bots={ this.state.bots }
        addBot={ this.addBot }
        deleteBot={ this.deleteBot }
      />
    </div>
    )
  }
}

export default BotsPage;
