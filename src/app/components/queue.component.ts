import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Queue } from "../models/queue.model";
import * as QueueActions from "../actions/queue.actions";

interface AppState {
    queue: Queue;
}

@Component({
    selector: 'queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css']
  })
  export class QueueComponent {
    queue: Observable<Queue>;
    requests: Request[]

    constructor(private store: Store<AppState>) {
      this.queue = this.store.select('queue');
    }

    // Dispatching updates the app state by instantiating new event objects
    nextQueue() {
      this.store.dispatch(new QueueActions.ChangeQueue({queue: this.nextQueue}));
    }
  }