import { Test } from '../src/Test'
import Factory = require('./factory')
const chai = require('chai')
const assert = chai.assert

describe('Test', () => {
    it('should pass', () => {
        try {
            const event = Factory.build('event', { name: 'an overwritten name' })
            const returned = Test.test(event)
            assert.equal(returned, 'an overwritten name')
        } catch (err) {
            assert.exists(err)
        }
    })

    it('should throw', () => {
        try {
            const event = Factory.build('event', { name: null })
            assert.throws(() => { Test.test(event) })
        } catch (err) {
            assert.exists(err)
        }
    })
})
