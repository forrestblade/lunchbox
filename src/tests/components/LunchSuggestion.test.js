/* eslint-env jest */
import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
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
