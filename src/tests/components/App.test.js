import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'code'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import App from '../../components/App'

describe('App', () => {
  let fetchRandomRestaurantStub = sinon.stub()

  function requiredProps (overrides) {
    let props = {
      fetchRestaurant: fetchRandomRestaurantStub
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

    // it('should pass a submit handler to `LunchSuggestion`', () => {
    //   const component = renderComponent()

    // })

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
  })
})
