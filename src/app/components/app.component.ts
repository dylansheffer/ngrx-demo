import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { RequestComponent } from "./request.component"



interface AppState {
}

@NgModule({
  imports: [BrowserModule],
  declarations: [Request],
  bootstrap: [Request]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private store: Store<AppState>) {
  }
}

