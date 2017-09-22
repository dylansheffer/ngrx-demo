import { Action } from "@ngrx/store";

export const CHANGEQUEUE = 'ChangeQueue';

export class ChangeQueue implements Action {
    readonly type = CHANGEQUEUE;
    constructor(public payload: any = null) {}
}

export type All
= ChangeQueue;