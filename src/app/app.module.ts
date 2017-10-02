import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { StoreModule } from '@ngrx/store';
import { requestReducer } from "./reducers/request.reducer";
//import { queueReducer } from "./reducers/queue.reducer";

import { RequestComponent } from "./components/request.component";
import { QueueComponent } from "./components/queue.component";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      request: requestReducer
      // queue: queueReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

