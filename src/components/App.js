import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchRestaurants, addRestaurant } from '../services/api'
import LunchSuggestion from './LunchSuggestion'
import NewSuggestion from './NewSuggestion'

function handleSubmit(restaurant) {
  console.log(restaurant)
  this.props.addRestaurant(restaurant)

  this.props.fetchRestaurants().then(data => {
    const restaurant = data
    this.setState({ restaurant })
  })
}

function newSuggestion() {
  this.props.fetchRestaurants().then(data => {
    const restaurant = data
    this.setState({ restaurant })
  })
}

class App extends Component {
  state = {
    restaurant: {}
  }

  componentDidMount = () => {
    this.props.fetchRestaurants().then(data => {
      const restaurant = data
      this.setState({ restaurant })
    })

    setInterval(() => {
      this.props.fetchRestaurants().then(data => {
        const restaurant = data
        this.setState({ restaurant })
      })
    }, 30000)
  }

  render() {
    return (
      <main className="App code vh-100 dt w-100 bg-orange">
        <div className="tc-l mt4 mt5-m mt6-l ph3">
          <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">LunchBox</h1>
          <h2 className="fw1 f3 white-80 mt3 mb4">
            The unofficial office lunch spot
          </h2>
        </div>
        <LunchSuggestion
          suggestion={this.state.restaurant}
          newSuggestion={newSuggestion.bind(this)}
        />
        <NewSuggestion handleSubmit={handleSubmit.bind(this)} />
      </main>
    )
  }
}

App.defaultProps = {
  fetchRestaurants,
  addRestaurant
}

App.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
  addRestaurant: PropTypes.func.isRequired
}

export default App
