import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // file imports RouterModule and Routes so the app can have routing functionality
import { HeroesComponent } from './heroes/heroes.component'; // import, HeroesComponent, will give the Router somewhere to go once you configure the routes
import { DashboardComponent } from './dashboard/dashboard.component'; // аdd the dashboard route
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // import HeroDetailComponent

// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar. Here, we configure the router at the application's root level.
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // to make the app navigate to the dashboard automatically - add a default route
  { path: 'dashboard', component: DashboardComponent }, // add the dashboard route, the browser's address bar points to the web site's root but when the app starts - that doesn't match any existing route so the router doesn't navigate anywhere
  { path: 'detail/:id', component: HeroDetailComponent }, // add a parameterized route to the routes array that matches the path pattern to the hero detail view
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({ // metadata initializes the router and starts it listening for browser location changes
  imports: [RouterModule.forRoot(routes)], // adds the RouterModule to the AppRoutingModule imports array and configures it with the routes. You configure the router at the application's root level.
  exports: [RouterModule] // exports RouterModule so it will be available throughout the app
})
export class AppRoutingModule { }
