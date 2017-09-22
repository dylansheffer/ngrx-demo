import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Queue } from "../models/queue.model";
import * as RequestActions from "../actions/queue.actions";

interface AppState {
    queue: Queue;
}