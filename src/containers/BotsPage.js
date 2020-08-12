import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const URL ="http://localhost:6001/bots/"

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: [],
  }

  componentDidMount () {
    fetch( URL)
    .then( res => res.json() )
    .then( bots => this.setState({ bots }) )
  }

  moveBot =(bot)=>{
    let myBots = [...this.state.myBots]

    if ( !myBots.includes( bot ) ) {
      myBots.push( bot )
      this.setState({
        myBots
      })
    }
  }

  releaseBot =(bot)=>{
    
    let myBots = [...this.state.myBots]
    
    if ( myBots.includes( bot ) ) {
      myBots = myBots.filter( bat => bat !== bot )
      this.setState({
        myBots
      })
    }
  }

  removeBot=(bot)=>{
    
    fetch(URL+ bot.id, {method: 'DELETE',})
    let bots = [...this.state.bots]
    
    if ( bots.includes( bot ) ) {
      bots = bots.filter( bat => bat !== bot )
      this.setState({
        bots
      })
    }
    
    

    
  }


  render() {
    return <div>
      <YourBotArmy 
      myBots={this.state.myBots}
      releaseBot={this.releaseBot}
      removeBot={this.removeBot}
      />

      <BotCollection 
      bots={this.state.bots}
      moveBot={this.moveBot}
      removeBot={this.removeBot}
      />
      
      </div>;
  }
}

export default BotsPage;
