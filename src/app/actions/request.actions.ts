import { Action } from "@ngrx/store";

export const POSTREQUEST = '[Request] PostRequest';
export const CHANGEQUEUE= '[Request]ChangeQueue';

export class PostRequest implements Action {
    readonly type = POSTREQUEST;
    constructor(public payload: any = null) {}
}
export class ChangeQueue implements Action {
    readonly type = CHANGEQUEUE;
    constructor(public payload: any = null) {}
}

export type All
= PostRequest
| ChangeQueue;