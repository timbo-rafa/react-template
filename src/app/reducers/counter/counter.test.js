import counter, { typeIncrement, initialState } from './counter'

describe('counter reducer', () => {
  it('should handle initial state', () => {
      expect( counter(undefined, {})
      ).toEqual(initialState)
  })

  it(`should handle ${typeIncrement}`, () => {
    expect( counter(initialState, {
      type: typeIncrement,
      amount: 2
    })
    ).toEqual(initialState + 2)
  });
});

// https://redux.js.org/basics/example