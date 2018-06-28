import 'isomorphic-fetch'

export const fetchRestaurants = () => {
    return fetch(`http://localhost:3001/restaurants`)
    .then(res => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch(err => {
        return err
    })

}

export const addRestaurant = (restaurant) => {
    console.log(restaurant)
    return fetch('http://localhost:3001/restaurants', {
        method: 'POST',
        body: JSON.stringify(restaurant),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .catch(err => err)
}