import * as RequestActions from '../actions/request.actions';
import { Request } from '../models/request.model';
import * as Queues from '../models/queue.model';

export type Action = RequestActions.All;

// Default App State
const defaultState: Request = {
    title: 'ngrx Demo',
    author: 'Dylan Sheffer',
    queue: new Queues.AwaitingRequestProcessing
}

// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

// Reducer function
export function requestReducer(state: Request = defaultState, action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case RequestActions.POSTREQUEST:
            return newState(state, { title: action.payload.title, author: action.payload.author, queue: action.payload.queue });
        default:
            return state;
    }
}