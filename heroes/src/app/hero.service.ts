import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //  import HttpClient and HttpHeaders
import { Observable, of } from 'rxjs'; // Observable imports
import { catchError, map, tap } from 'rxjs/operators'; // Import the catchError symbol from rxjs/operators

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'; // import MessageService

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Angular will inject the singleton MessageService into that property when it creates the HeroService
  constructor(
    private http: HttpClient, // all HttpClient methods return an RxJS Observable of something.
    private messageService: MessageService    
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  };

  private heroesUrl = 'api/heroes'  // URL to web api

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)// GET heroes from the server
    .pipe(
      tap(_ => this.log('fetched heroes')), // logs the operation
      catchError(this.handleError<Hero[]>('getHeroes', []))
    ); // Now extend the observable result with the pipe() method and give it a catchError() operator
  } // You've swapped of() for http.get() and the app keeps working without any other changes because both functions return an Observable<Hero[]>.
  
  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);//send the message _after_ fetching the heroes
  //   return of(HEROES.find(hero => hero.id === id)); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  // }

  // GET hero by id. Will 404 if id not found; getHero() constructs a request URL with the desired hero's id.
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateHero(hero: Hero): Observable<any> { // PUT: update the hero on the server
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // POST: add a new hero to the server
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  //DELETE: delete the hero from the server
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

}
