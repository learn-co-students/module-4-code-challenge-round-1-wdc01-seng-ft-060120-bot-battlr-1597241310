import React, { Component } from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const botsURL = 'http://localhost:6001/bots/'

class BotsPage extends Component {
  state = {
    botList: [],
    botArmyList: []
  }

  deleteBot = bot => {

    fetch(botsURL + bot.id, { method: 'DELETE' })
      .then( resp => resp.json() )
      .then( alert( bot.name + ' was deleted successfully') )
  }

  addToBotArmyList = bot => {
    let { botArmyList } = this.state

    if ( !botArmyList.includes(bot) ){
      this.setState({
        botArmyList: [...botArmyList, bot]
      })
    }
  }

  removeFromBotArmyList = bot => {
    let { botArmyList } = this.state

    let updatedList = botArmyList.filter( b => b !== bot )

    this.setState({
      botArmyList: updatedList
    })
  }

  render() {
    return (
      <React.Fragment>
        <YourBotArmy
          botArmyList={ this.state.botArmyList }
          removeFromBotArmyList={ this.removeFromBotArmyList }
          deleteBot={ this.deleteBot }
        />
        <BotCollection
          botList={ this.state.botList }
          addToBotArmyList={ this.addToBotArmyList }
          deleteBot={ this.deleteBot }
        />
      </React.Fragment>
    )
  }

  componentDidMount() {
    fetch(botsURL)
      .then( resp => resp.json() )
      .then( botList => this.setState({ botList }))
  }
}

export default BotsPage;
