import 'isomorphic-fetch'

export function fetchRestaurants () {
  return window.fetch(`http://localhost:3001/restaurants`)
    .then(res => res.json())
    .then(data => {
      const restaurant = data
      this.setState({ restaurant })
    })
    .catch(err => err)
}

export const addRestaurant = restaurant => {
  return window.fetch('http://localhost:3001/restaurants', {
    method: 'POST',
    body: JSON.stringify(restaurant),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(fetchRestaurants.call(this))
    .catch(err => err)
}
