// this component simply receives a hero object through its hero property and displays it
import { Component, OnInit } from '@angular/core';// import Input
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'; // import Hero
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero!: Hero; // add a hero property - the property can receive its value from its parent component
  hero: Hero;

  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService, // gets hero data from the remote server and this component will use it to get the hero-to-display
    private location: Location //  is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // is a static image of the route information shortly after the component was created. Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void { // navigates backward one step in the browser's history stack
    this.location.back();
  }

}
