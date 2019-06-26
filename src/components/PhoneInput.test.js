import {h} from 'preact'
import PhoneInput from './PhoneInput'

describe('PhoneInput', () => {
    describe('clearValue', () => {
        const cases = [
            {value: '123', expected: '123'},
            {value: '12 3', expected: '123'},
            {value: '+', expected: ''},
            {value: '7923', expected: '923'},
            {value: '1as2 45 0e', expected: '12450'},
        ]

        cases.forEach(({value, expected}, i) => {
            it(`test ${i + 1}: ${value}`, () => {
                expect(PhoneInput.clearValue(value)).toBe(expected);
            });
        });
    })

    describe('format', () => {
        const mask = '+7 ___-___-__-__'
        const cases = [
            {value: '', expected: ''},
            {value: '1', expected: '+7 1'},
            {value: '12345', expected: '+7 123-45'},
            {value: '123456', expected: '+7 123-456'},
            {value: '1234567890000', expected: '+7 123-456-78-90'},
        ];
        cases.forEach(({value, expected}, i) => {
            it(`test ${i + 1}: ${value} => ${mask}`, () => {
                expect(PhoneInput.format(value, mask)).toBe(expected);
            });
        });
    })
})
