import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { RequestComponent } from "./request.component"



interface AppState {
}

@Component({
  selector: 'app-root',
  template: `
    <request></request>
    <queue></queue>
    <ng-template #loading>Loading Request Data...</ng-template>
  `
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    const requests$ = store.select<Observable<Request[]>>();
  }
}

