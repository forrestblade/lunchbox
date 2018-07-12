import React, { Component } from 'react'
import { fetchRestaurants } from '../services/api'
import LunchSuggestion from './LunchSuggestion'
import NewSuggestion from './NewSuggestion'
import { fetchRestaurant } from '../utils/fetchRestaurant'

class App extends Component {
  state = {
    restaurant: {}
  }

  componentDidMount = () => {
    fetchRestaurant.call(this)
  }

  render () {
    return (
      <main className='App code vh-100 dt w-100 bg-orange'>
        <div className='tc-l mt4 mt5-m mt6-l ph3'>
          <h1 className='f2 f1-l fw2 white-90 mb0 lh-title'>LunchBox</h1>
          <h2 className='fw1 f3 white-80 mt3 mb4'>
            The unofficial office lunch spot
          </h2>
        </div>
        <LunchSuggestion
          suggestion={this.state.restaurant}
          newSuggestion={() => fetchRestaurants.call(this)}
        />
        <NewSuggestion />
      </main>
    )
  }
}

export default App
