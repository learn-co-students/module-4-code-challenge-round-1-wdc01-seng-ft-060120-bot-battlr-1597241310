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
      selectedBot: ""
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
    this.setState({
      selectedBot
    })
  }

  addBot = () => {

  }

  render() {
    return <div>
      {<YourBotArmy selectedBot={this.state.selectedBot}/>}
      {<BotsCollection
        botsData={this.state.botsData} 
        clickBot={this.clickBot}/>}
    </div>;
  }
}

export default BotsPage;
