/* eslint-env jest */
import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import App from '../../components/App'

describe('App', () => {
  let fetchRandomRestaurantStub = sinon.stub()

  function requiredProps (overrides) {
    let props = {
      fetchRestaurants: fetchRandomRestaurantStub
    }

    return {
      ...props,
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<App />)
  }

  describe('When the application mounts', () => {
    it('should exist with a specifying className', () => {
      const component = renderComponent()

      expect(component.is('main.App')).to.be.true()
    })

    it('should contain a header with text equal to `LunchBox`', () => {
      const component = renderComponent()

      expect(component.find('h1').text()).to.equal('LunchBox')
    })

    it('should contain and sub-headline with text equal to `The unofficial office lunch spot aggregator`', () => {
      const component = renderComponent()

      expect(component.find('h2').text()).to.equal(
        'The unofficial office lunch spot'
      )
    })

    it('should contain a `LunchSuggestion`', () => {
      const component = renderComponent()

      expect(component.find('LunchSuggestion').exists()).to.be.true()
    })

    it('should contain a `NewSuggestion`', () => {
      const component = renderComponent()

      expect(component.find('NewSuggestion').exists()).to.be.true()
    })

    it('should pass a submitHandler to `NewSuggestion`', () => {
      const component = renderComponent()

      expect(
        component.find('NewSuggestion').props().handleSubmit
      ).to.be.a.function()
    })

    it('should have intial state of `restaurants: {}`', () => {
      let component = renderComponent()

      expect(component.state().restaurants).to.equal(undefined)
    })

    describe('The component mounts and receives data', () => {
      let component
      let mockRestaurant = {
        description: 'Hungry Hobo, 18th Avenue, East Moline, IL, USA',
        label: 'Hungry Hobo, 18th Avenue, East Moline, IL, USA',
        placeId: 'ChIJVYIJGSQ64ocR1UXIeL45ruQ',
        isFixture: false,
        matchedSubstrings: { length: 6, offset: 0 },
        gmaps: {
          address_components: [
            { long_name: '1842', short_name: '1842', types: ['street_number'] },
            {
              long_name: '18th Avenue',
              short_name: '18th Ave',
              types: ['route']
            },
            {
              long_name: 'East Moline',
              short_name: 'East Moline',
              types: ['locality', 'political']
            },
            {
              long_name: 'Hampton Township',
              short_name: 'Hampton Township',
              types: ['administrative_area_level_3', 'political']
            },
            {
              long_name: 'Rock Island County',
              short_name: 'Rock Island County',
              types: ['administrative_area_level_2', 'political']
            },
            {
              long_name: 'Illinois',
              short_name: 'IL',
              types: ['administrative_area_level_1', 'political']
            },
            {
              long_name: 'United States',
              short_name: 'US',
              types: ['country', 'political']
            },
            { long_name: '61244', short_name: '61244', types: ['postal_code'] }
          ],
          formatted_address: '1842 18th Ave, East Moline, IL 61244, USA',
          geometry: {
            location: { lat: 41.5147841, lng: -90.42585989999998 },
            location_type: 'ROOFTOP',
            viewport: {
              south: 41.5134351197085,
              west: -90.42720888029152,
              north: 41.5161330802915,
              east: -90.4245109197085
            }
          },
          place_id: 'ChIJVYIJGSQ64ocR1UXIeL45ruQ',
          types: ['establishment', 'food', 'point_of_interest', 'restaurant']
        },
        location: { lat: 41.5147841, lng: -90.42585989999998 }
      }

      beforeEach(() => {
        fetchRandomRestaurantStub.resolves(mockRestaurant)
        component = renderComponent()
      })

      afterEach(() => {
        sinon.restore()
      })

      it('should update the restaurant', () => {
        expect(component.state().restaurants).to.equal(mockRestaurant)
      })
    })
  })
})
