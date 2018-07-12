import { fetchRestaurants } from '../services/api'

export function newSuggestion () {
  fetchRestaurants().then(data => {
    const restaurant = data
    this.setState({ restaurant })
  })
}
