import { getCOunterValue } from "./getCounterValue"

describe('getCounterValue', () => {
    test('work with empty state', () => {
        expect(getCOunterValue({})).toBe(0)
    })

    test('work with filled state', () => {
        expect(getCOunterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
})