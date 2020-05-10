// ACTIONS
export const typeIncrement = 'INCREMENT';

export const initialState = 0;

const counter = (state = initialState, action) => {
    switch (action.type) {
        case typeIncrement:
            return state + action.amount;
        default:
            return state;

    }
}

export default counter