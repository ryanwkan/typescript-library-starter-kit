/**
 * Sample Library
 *
 * @remarks
 * Sample library
 *
 */

import { SomeClass } from './SomeClass'

export class Test {
    public static test (payload: any): string {
        try {
            return new SomeClass(payload).test()
        } catch (err) {
            console.log(`SomeClass failed. Error: ${err}`)
            throw err
        }
    }
}
