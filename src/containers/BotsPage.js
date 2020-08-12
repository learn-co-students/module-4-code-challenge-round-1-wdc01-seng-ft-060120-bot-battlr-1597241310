import React, { Component } from "react";
import BotCollection from './BotsPage.js';

const API = 'http://localhost:6001/bots/'

class BotsPage extends Component {
  //start here with your code for step one
  constructor(props) {
    super(props)
  
    this.state = {
       bots: [],
       myBots: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(bots => 
      this.setState({
        bots: bots
      }))
  }
  

  render() {
    return (
    <div>
      <BotCollection />
    </div>
    )
  }
}

export default BotsPage;
