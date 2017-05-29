import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class LibraryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game_id: props.game_id,
      game: {}
      }
    }

    componentDidMount() {
      this.getGame()
    }

    getGame() {
      api.getGame(this.state.game_id, (game) => {
        this.setState({game: game.game})
        console.log(this.state.game);
      })
    }


  render() {
    return (
      <div className="col-lg-3 col-md-4 col-xs-6 thumb libraryItem">
          <div className="thumbnail" >
            <a href={`/games/igdb/${this.state.game.igdb_id}`}>
              <img src={`/images/games/${this.state.game_id}.jpg`} className="img-responsive" alt={this.state.game.game_name} />
              <p>{this.state.game.game_name}</p>
            </a>
            <a href={`/games/igdb/${this.state.game.igdb_id}`}>Edit status</a>
          </div>
      </div>
    )
  }
}
