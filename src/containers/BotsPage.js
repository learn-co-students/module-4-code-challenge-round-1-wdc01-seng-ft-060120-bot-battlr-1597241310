import React, { Component } from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const botsURL = 'http://localhost:6001/bots/'

class BotsPage extends Component {
  state = {
    botList: [],
    botArmyList: [],
    // currentBotShow: null
  }

  deleteBot = bot => {
    fetch(botsURL + bot.id, { method: 'DELETE' })
      .then( resp => resp.json() )
      .then( data => this.removeFromLists(bot) )
  }

  removeFromLists = bot => {
    let updatedBotList = this.state.botList.filter( b => b !== bot )
    let updatedBotArmyList = this.state.botArmyList.filter( b => b !== bot )

    this.setState({
      botList: updatedBotList,
      botArmyList: updatedBotArmyList
    })
  }

  addToBotArmyList = ( bot, event ) => {
    event.persist()

    if ( !event.target.matches('button') ) {
      let { botArmyList } = this.state
  
      if ( !botArmyList.includes(bot) ){
        this.setState({
          botArmyList: [...botArmyList, bot]
        })
      }
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
