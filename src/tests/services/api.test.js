/* eslint-env jest */
import sinon from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/sinon'
import { expect } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/code'
import '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/isomorphic-fetch'
import { fetchRestaurants } from '../../services/api'

describe('Given a restaurant server', () => {
  let fetchStub

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('When the service is called', () => {
    it('should call fetch', () => {
      fetchStub.resolves({ json: sinon.spy() })

      fetchRestaurants()

      sinon.assert.calledOnce(fetchStub)
      sinon.assert.calledWithExactly(
        fetchStub,
        'http://localhost:3001/restaurants'
      )
    })

    describe('When the service is successful', () => {
      it('should return mockRestaurants', () => {
        const mockRestaurants = {
          restaurants: [
            { name: 'value1' },
            { name: 'value2' },
            { name: 'value3' }
          ]
        }
        const json = sinon.stub().returns(mockRestaurants)

        fetchStub.resolves({ json })

        fetchRestaurants().then(data => {
          expect(data).to.equal(mockRestaurants)
        })
      })
    })

    describe('When the service is unsuccessful', () => {
      it('should should return and error', () => {
        fetchStub.rejects({ json: 'bark bark' })

        return fetchRestaurants()
          .then(data => {
            expect(data).to.be.undefined()
          })
          .catch(e => {
            expect(e).to.not.equal(undefined)
          })
      })
    })

    // describe('When the serve is POSTED to', () => {
    //   let mockRestaurant = 'Mcdonalds'
    //   const expectedFetchBody = {
    //     method: 'POST',
    //     body: JSON.stringify({restaurant: mockRestaurant}),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }

    //   addRestaurant(mockRestaurant)
    //   sinon.assert.calledOnce(fetchStub)
    //   sinon.assert.calledWithExactly(fetchStub, 'localhost:3001/restaurants', expectedFetchBody)
    // })
  })
})
