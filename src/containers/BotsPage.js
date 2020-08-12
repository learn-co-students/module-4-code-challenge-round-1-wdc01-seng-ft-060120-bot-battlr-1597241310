import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

const URL = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    myArmy: []
  }


  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(botData => {
      this.setState({
        bots: botData
      })
    })
  }

  addToMyArmy = (e) => {
    let army = [...this.state.myArmy]
    if(!army.includes(e))
      army.push(e)
      this.setState({
        myArmy: army
    })
  }


  // was not able to finish in time this was going to be a function that removed them from the army 
  // removeMember = (e) => {
  //   let army = [...this.state.myArmy]

  // }


  render() {
    return <div>
      <YourBotArmy myArmy= { this.state.myArmy }/>
      <BotCollection  botList = { this.state.bots } addToMyArmy = { this.addToMyArmy }/>
    </div>;
  }
}

export default BotsPage;
