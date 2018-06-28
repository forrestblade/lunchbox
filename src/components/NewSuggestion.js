import React, { Component } from 'react'

function handleChange(e) {
  const name = e.target.value
  this.setState({ restaurants: {name} })
}

function handleSubmit(e) {
  e.preventDefault()

  this.setState({ restaurants: {name: ''} })
  console.log(this.state.restaurants.name)
  this.props.handleSubmit(this.state.restaurants)
}
export default class NewSuggestion extends Component {
  state = {
    restaurants: {
      name: ''
    }
  }
  render() {
    return (
      <section className="New mb4 tc mb0-ns fl w-100">
        <form onSubmit={handleSubmit.bind(this)}>
          <input
            value={this.state.restaurants.name}
            className="new-suggestion mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
            placeholder="Have a suggestion?"
            onChange={handleChange.bind(this)}
          />
          <input
            type="submit"
            className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
          />
        </form>
      </section>
    )
  }
}
