
// imports other classes
import { Address } from './Address';
import { Review } from './Review';

export class Restaurant {

  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;


   constructor(args?) {

     this.name = args.name;
     this.website = args.website;
     this.phone = args.phone;
     this.rating = args.rating;
     this.avgMealPrice = args.avgMealPrice;
   }
}
