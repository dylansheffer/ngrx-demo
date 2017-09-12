import { Action } from "@ngrx/store";

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
    readonly type = EDIT_TEXT;
    constructor(public payload: any = null) { }
}

export class Upvote implements Action {
    readonly type = UPVOTE;
    constructor(public payload: any = null) { }
}

export class Downvote implements Action {
    readonly type = DOWNVOTE;
    constructor(public payload: any = null) { }
}

export class Reset implements Action {
    readonly type = RESET;
    constructor(public payload: any = null) { }
}

export type All
= Upvote
| Downvote
| Reset
| EditText;