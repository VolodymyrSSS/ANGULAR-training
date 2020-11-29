import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewOneComponent } from './new-one/new-one.component';
import { DateComponent } from './date/date.component';
import { LoopedComponent } from './looped/looped.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOneComponent,
    DateComponent,
    LoopedComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
