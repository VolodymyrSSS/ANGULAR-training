import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Observable imports

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'; // import MessageService

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Angular will inject the singleton MessageService into that property when it creates the HeroService
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);//send the message _after_ fetching the heroes
    return of(HEROES.find(hero => hero.id === id)); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

}
