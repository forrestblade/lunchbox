import { fetchRestaurants } from '../services/api'

export function interval () {
  setInterval(() => {
    fetchRestaurants().then(data => {
      const restaurant = data
      this.setState({ restaurant })
    })
  }, 30000)
}
