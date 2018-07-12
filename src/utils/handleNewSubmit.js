export function handleSubmit () {
  this.setState({ restaurants: {} })
  this._geoSuggest.focus()
  this._geoSuggest.clear()
  this.props.handleSubmit(this.state.restaurants)
}
