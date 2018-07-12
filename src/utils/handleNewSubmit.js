import { addRestaurant } from '../services/api'

export function handleSubmit () {
  this.setState({ restaurant: {} })
  this._geoSuggest.focus()
  this._geoSuggest.clear()
  addRestaurant(this.state.restaurant)
}
