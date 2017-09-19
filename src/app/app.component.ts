import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Request } from "./models/request.model";
import * as RequestActions from "./actions/request.actions";

interface AppState {
  request: Request;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  request: Observable<Request>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.request = this.store.select('request');
  }

  // Dispatching updates the app state by instantiating new event objects
  editText() {
    this.store.dispatch(new RequestActions.EditText(this.text));
  }

  resetRequest() {
    this.store.dispatch(new RequestActions.Reset());
  }

  upvote() {
    this.store.dispatch(new RequestActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new RequestActions.Downvote());
  }
}
