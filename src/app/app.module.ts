import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { StoreModule } from '@ngrx/store';
import { requestReducer } from "./reducers/request.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      request: requestReducer
    }),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

