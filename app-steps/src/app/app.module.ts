import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewOneComponent } from './new-one/new-one.component';
import { DateComponent } from './date/date.component';
import { LoopedComponent } from './looped/looped.component';
import { ClickComponent } from './click/click.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOneComponent,
    DateComponent,
    LoopedComponent,
    ClickComponent,
    BindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
