import counterReducer, { decrement, increment } from "./counterReducer"

describe('getCOunterValue', () => {
    test('increment', () => {
        expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 })
    })

    test('decrement', () => {
        expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 })
    })

    test('woth epmty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({ value: -1 })
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 })
    })
})