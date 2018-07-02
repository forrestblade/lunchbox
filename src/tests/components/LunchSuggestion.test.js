import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'code'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import LunchSuggestion from '../../components/LunchSuggestion'

describe('App', () => {
  function requiredProps (overrides) {
    let props = {
      suggestion: {
        name: 'Forrest'
      }
    }

    return {
      ...props,
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<LunchSuggestion {...props} />)
  }

  it('should exist with a specifying className', () => {
    let component = renderComponent()

    expect(component.is('section.Suggestion'))
  })
})
