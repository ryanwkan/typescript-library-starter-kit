const Joi = require('joi')

/**
 * Test Interface
 */
export interface IPayload {
    name: string
}

/**
 * Test Class
 */

export class SomeClass {
    private payload

    constructor (payload: IPayload) {
        this.payload = payload

        Joi.validate(this.payload, Joi.object().keys({
            name: Joi.string().required()
        }).required())
    }

    public test (): string {
        if (!this.payload.name) throw new Error('failed')

        return this.payload.name

    }
}
