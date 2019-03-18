import { Injectable } from '@angular/core';
import { Restaurant} from '../Restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../Address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[];
 location: Address;
  constructor() {

    // todo replace with api call
    this.restaurants = [
      new Restaurant({
                name : 'Pizza Pita',
              location: new Address({
                        streetNumber : '7489',
                          streetName : 'Decarie blvd',
                           apartment :  null,
                                city : 'Montreal',
                            province : 'QC',
                             country : 'Canada'
                      }),
             website : 'http://www.pizzapita.com',
               phone : '(514)-731-7482',
              rating : 3,
        avgMealPrice : 3
      }),

      new Restaurant({
                name : 'Yakimono',
              location: new Address({
                        streetNumber : null,
                          streetName : null,
                           apartment : null,
                                city : null,
                            province : null,
                             country : null
                      }),
             website : 'http://www.google.com',
               phone : null,
              rating : 1,
        avgMealPrice : 1
      }),

      new Restaurant({
                name : 'Tav Cafe',
              location: new Address({
                        streetNumber : '5748',
                          streetName : 'Decarie Blvd',
                           apartment : null,
                                city : 'Bogota',
                            province : 'QC',
                             country : 'Canada'
                       }),
             website : null,
               phone : '(718)-854-45122',
              rating : 2,
        avgMealPrice : 2
      }),

      new Restaurant({
                name : 'Pizza Gourmetti',
        location: new Address({
          streetNumber : '5287',
          streetName : 'Queen Mary Rd.',
          apartment : '405B',
          city : 'Montreal',
          province : 'QC',
          country : 'Canada'
        }),
             website : 'http://www.chabad.org',
               phone : '(875)-487-9770',
              rating : 4,
        avgMealPrice : 4
      }),

      new Restaurant({
                name : 'Chops',
              location: new Address({
                        streetNumber : '5287',
                          streetName : 'Queen Mary Rd.',
                           apartment : '405B',
                                city : 'Denver',
                            province : 'QC',
                             country : 'Canada'
        }),
             website : 'http://www.chabad.org',
               phone : '(875)-487-9770',
              rating : 4,
        avgMealPrice : 4,
      })
    ];


/*
    this.restaurants = [
      new Restaurant({
        name : 'Pizza Pita',
        website : 'http://www.pizzapita.com',
        phone : '(514)731-7482',
        rating : 3,
        avgMealPrice : 3,
      })];
*/
  }

  getRestaurants(): Observable<Restaurant[]> {

    return of(this.restaurants);

}



}
