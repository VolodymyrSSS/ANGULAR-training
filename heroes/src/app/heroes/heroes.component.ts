import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'; // import HeroService
// import { MessageService } from '../message.service'; // add additional messages to hero service

@Component({ // specifies the Angular metadata for the component
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm'; // add a hero property. Later, it was renamed the component's hero property to selectedHero

  // hero: Hero = { // refactor the component's hero property to be of type Hero
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES; // define a component property called heroes to expose the HEROES array for binding than replace the definition of the heroes property with a simple declaration
  heroes!: Hero[];

  // selectedHero!: Hero; // don't assign it; there is no selected hero when the application starts.

  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site
  // constructor(private heroService: HeroService, private messageService: MessageService) { 
  // }

  constructor(private heroService: HeroService) { }

  ngOnInit() { //  is a lifecycle hook. It's a good place to put initialization logic
    this.getHeroes();
  }

  // Add the click event handler - assigns the clicked hero from the template to the component's selectedHero
  // onSelect(hero: Hero): void {
  //   // this.heroes = this.heroService.getHeroes();
  //   this.heroService.getHeroes().subscribe({
  //     next: heroes=>this.heroes = heroes,
  //   });
  // }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }


  // retrieve the heroes from the service
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes(); //  assigns an array of heroes to the component's heroes property. But the assignment occurs synchronously
  // }

  // This asynchronous approach will work when the HeroService requests heroes from the server
  getHeroes() {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  } // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  
}
