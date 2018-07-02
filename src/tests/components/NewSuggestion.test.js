import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import NewSuggestion from '../../components/NewSuggestion'
import Geosuggest from 'react-geosuggest'

describe('Given NewSuggestion', () => {
  let handleSubmitStub = sinon.stub()

  function requiredProps (overrides) {
    const props = {
      handleSubmit: handleSubmitStub
    }

    return {
      ...props,
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<NewSuggestion {...props} />)
  }

  describe('When the component first renders', () => {
    it('should exist with a specifying className', () => {
      const component = renderComponent()

      expect(component.is('section.New')).to.be.true()
    })

    it('should contain a form with an input and button', () => {
      const component = renderComponent()
      const form = component.find('form')

      expect(form.length).to.equal(1)
      expect(form.childAt(0).is('input.new-suggestion')).to.be.true()
      expect(form.childAt(1).type()).to.equal('input')
    })

    it('should contain no text in the input', () => {
      const component = renderComponent()
      const input = component.find('form').childAt(0)

      expect(input.text()).to.equal('')
    })

    it('should contain no text in state', () => {
      const component = renderComponent()

      expect(component.state().restaurants.name).to.equal('')
    })

    describe('When a user types in a new restaurant suggestion', () => {
      let component
      let mockText

      beforeEach(() => {
        mockText = 'Mamas Pizza'
        component = renderComponent()
        component
          .find('input.new-suggestion')
          .simulate('change', { target: { value: mockText } })
      })

      it('should update state with the input value', () => {
        expect(component.state().restaurants).to.equal(mockText)
      })
      describe('When the user clicks the sumbit button', () => {
        beforeEach(() => {
          component
            .find('input.new-submit')
            .simulate('submit', { preventDefault: sinon.spy() })
        })

        it('should call the correct callback', () => {
          sinon.assert.calledOnce(handleSubmitStub)
        })

        it('should clear the input', () => {
          const input = component.find('input.new-suggestion')

          expect(input.props().value).to.equal('')
        })
      })
    })
  })
})
