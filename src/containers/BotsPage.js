import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

const BASEURL = "http://localhost:6001/bots/"

class BotsPage extends Component {

  state = {
    bots: [],
    myArmy: [],
    specs: false,
    currentBot: {},
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

  showSpecs = (target, currentBot) => {
    if (target.tagName === "BUTTON"){ return }
    this.setState({
      specs: true,
      currentBot
    })
  }

  hideSpecs = () => {
    this.setState({
      specs: false,
    })
  }

  addBot = (bot) => {
    let newBots = this.state.bots.filter(mybot => mybot !== bot )
    if (this.state.myArmy.includes(bot)){
      alert("Already on your squad, boss!")
      return
    }
    let updatedArmy = [...this.state.myArmy, bot]
    this.setState({
      myArmy: updatedArmy,
      bots: newBots,
      specs: false,
    })
  }

  removeBot = (target, bot) => {
    if (target.tagName === "BUTTON"){ return }
    let updatedArmy = this.state.myArmy.filter(mybot => mybot !== bot )
    let updatedBots = [...this.state.bots, bot]
    this.setState({
      myArmy: updatedArmy,
      bots: updatedBots,
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
      { this.state.specs 
        ? <BotSpecs 
            bot={this.state.currentBot}
            hideSpecs={this.hideSpecs}
            addBot={this.addBot}
          />
        : <BotCollection 
            bots={ this.state.bots }
            showSpecs={ this.showSpecs }
            deleteBot={ this.deleteBot }
          /> 
      }
      
    </div>
    )
  }
}

export default BotsPage;
