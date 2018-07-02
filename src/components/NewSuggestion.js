import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'

function handleChange(e) {
  // const name = e.target.value
  this.setState({ restaurants: e })
}

function handleSubmit() {
  this.setState({ restaurants: {} })
  this._geoSuggest.focus()
  this._geoSuggest.clear()
  this.props.handleSubmit(this.state.restaurants)
}

export default class NewSuggestion extends Component {
  state = {
    restaurants: {}
  }
  render() {
    return (
      <section className="New">
        <div className="cf mw6 center mb4">
          <Geosuggest
            className="f6 f5-l new-suggestion input-reset bn shadow-5 fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
            ref={el => (this._geoSuggest = el)}
            placeholder="New Suggestion?!"
            onSuggestSelect={handleChange.bind(this)}
            location={new window.google.maps.LatLng(41.508957, -90.465839)}
            radius="20"
            inputClassName={
              'f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'
            }
            suggestsClassName={
              'fl list pl0 ml0 center mw6 ba b--light-silver br2'
            }
            suggestItemClassName={'ph3 pv3 bb b--light-silver'}
            autoActivateFirstSuggest={true}
          />
          <input
            readOnly
            value="Submit"
            className="new-submit f6 f5-l button-reset shadow-5 fl pv4 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
            onClick={handleSubmit.bind(this)}
          />
        </div>
      </section>
    )
  }
}
