import { Action } from "@ngrx/store";

export const POSTREQUEST = '[Request] PostRequest';

export class PostRequest implements Action {
    readonly type = POSTREQUEST;
    constructor(public payload: any = null) {}
}

export type All
= PostRequest;