import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Request } from "../models/request.model";
import * as RequestActions from "../actions/request.actions";

interface AppState {
    request: Request;
  }

@Component({
    selector: 'request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.css']
  })
  export class RequestComponent {
    request: Observable<Request>;
    title: string;
    author: string;

    constructor(private store: Store<AppState>) {
      this.request = this.store.select('request');
    }

    // Dispatching updates the app state by instantiating new event objects
    postRequest() {
      this.store.dispatch(new RequestActions.PostRequest({title: this.title, author: this.author}));
    }
  }