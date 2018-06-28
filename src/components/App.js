import React, { Component } from 'react';
import PropTypes from "prop-types";
import { fetchRestaurants, addRestaurant } from "../services/api";
import LunchSuggestion from './LunchSuggestion';
import NewSuggestion from './NewSuggestion';

function handleSubmit(restaurant) {
  console.log(restaurant)
  this.props.addRestaurant(restaurant)

  this.props.fetchRestaurants()
    .then(data => {
      const restaurant = data
      this.setState({restaurant})
    })
}

function newSuggestion() {
  this.props.fetchRestaurants()
  .then(data => {
    const restaurant = data
    this.setState({restaurant})
  })
}


class App extends Component {
  state = {
    restaurant: {}
  }

  componentDidMount = () => {
    this.props.fetchRestaurants()
    .then(data => {
      const restaurant = data
      this.setState({restaurant})
    })
  }

  render() {
    return (
      <main className="App vh-100 dt w-100 bg-dark-pink">
      <div className="mw7 center ph3 ph5-ns tc br2 pv5">
        <h1 className='fw6 f3 f2-ns lh-title mt0 mb3'>LunchBox</h1>
        <h2 className="fw2 f4 lh-copy mt0 mb3">The unofficial office lunch spot aggregator</h2>
      </div>
        <LunchSuggestion suggestion={this.state.restaurant} newSuggestion={newSuggestion.bind(this)}/>
        <NewSuggestion handleSubmit={handleSubmit.bind(this)}/>
      </main>
    );
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

export default App;
