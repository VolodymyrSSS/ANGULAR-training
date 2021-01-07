// this component simply receives a hero object through its hero property and displays it

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Component, OnInit, Input } from '@angular/core'; // import Input

import { Hero } from '../hero'; // import Hero

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero!: Hero; // add a hero property - the property can receive its value from its parent component

  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the HeroDetailComponent.
    private heroService: HeroService, // gets hero data from the remote server and this component will use it to get the hero-to-display.
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

}
