import { typeIncrement } from "./counter"

export const actionIncrement = (amount) => ({
    type: typeIncrement,
    amount: amount
})