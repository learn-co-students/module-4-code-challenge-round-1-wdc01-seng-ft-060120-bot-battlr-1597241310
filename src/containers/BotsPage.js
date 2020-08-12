import React, { Component } from "react";
import BotsCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

let botsUrl = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      botsData: [],
      botArmy: []
    }
  }
  
  componentDidMount() {
    fetch(botsUrl)
    .then(resp => resp.json())
    .then(botsData => this.setState({
      botsData
    }))
  }

  clickBot = (selectedBot) => {
    let newArmy = this.state.botArmy
    if(this.state.botArmy.includes(selectedBot))
      delete newArmy[newArmy.indexOf(selectedBot)]
    else
      if(newArmy.includes(selectedBot))
        return newArmy
      else
        newArmy.push(selectedBot)
        this.setState({
          botArmy: newArmy
      })
  }


  render() {
    return <div>
      {<YourBotArmy
        botArmy={this.state.botArmy}
        clickBot={this.clickBot} />}
      {<BotsCollection
        botsData={this.state.botsData} 
        clickBot={this.clickBot} />}
    </div>;
  }
}

export default BotsPage;
