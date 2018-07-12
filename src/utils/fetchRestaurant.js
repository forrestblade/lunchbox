import { fetchRestaurants } from '../services/api'

export function fetchRestaurant () {
  fetchRestaurants.call(this)
  setInterval(() => fetchRestaurants.call(this), 15000)
}
