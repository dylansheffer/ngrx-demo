import * as RequestActions from '../actions/request.actions';
import { Request } from '../models/request.model';

export type Action = RequestActions.All;

// Default App State
const defaultState: Request = {
    text: 'Hello. I am the default request',
    likes: 0
}

// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

// Reducer function
export function requestReducer(state: Request = defaultState, action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case RequestActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        case RequestActions.RESET:
            return defaultState;
        default:
            return state;
    }
}