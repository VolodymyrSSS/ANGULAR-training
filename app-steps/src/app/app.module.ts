import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewOneComponent } from './new-one/new-one.component';
import { DateComponent } from './date/date.component';
import { LoopedComponent } from './looped/looped.component';
import { ClickComponent } from './click/click.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PriceComponent } from './price/price.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'price', component: PriceComponent},
  {path: '**', component: NotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NewOneComponent,
    DateComponent,
    LoopedComponent,
    ClickComponent,
    BindingComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PriceComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
