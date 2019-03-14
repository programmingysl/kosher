import { Injectable } from '@angular/core';
import { Restaurant} from '../Restaurant';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[];

  constructor() {

    // todo replace with api call
    this.restaurants = [
      new Restaurant({
        name : 'Laurent',
    website : 'http://www.pizzapita.com',
    phone :  '(514)-731-7482',
      rating : 3,
    avgMealPrice : 3,
      }),

      new Restaurant({
        name : 'David',
        website : 'http://www.google.com',
        phone :  '(514)-732-1234',
        rating : 1,
        avgMealPrice : 1,
      }),

      new Restaurant({
        name : 'Tzofia',
        website : 'http://www.learntorah.com',
        phone :  '(718)-854-45122',
        rating : 2,
        avgMealPrice : 2,
      }),


      new Restaurant({
        name : 'Yosef',
        website : 'http://www.chabad.org',
        phone :  '(875)-487-9770',
        rating : 4,
        avgMealPrice : 4,
      }),
    ];




  }

  getRestaurants(): Observable<Restaurant[]> {

    return of(this.restaurants);

}



}
