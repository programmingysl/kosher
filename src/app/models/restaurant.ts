
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

/*
   constructor(args?) {

     this.name = args.name;
     this.website = args.website;
     this.phone = args.phone;
     this.rating = args.rating;
     this.avgMealPrice = args.avgMealPrice;
   }
   */

  constructor(args?) {

    if(args !== null){


      args.name ? this.name : null;
      args.website ? this.website : null;
      args.phone ? this.phone : null;
      args.rating ? this.rating : null;
      args.avgMealPrice ? this.avgMealPrice : null;

      this.location = new Address();

      args.address.streetNumber ? this.location.streetNumber : null;
      args.address.streetName ? this.location.streetName : null;
      args.address.apartment ? this.location.apartment : null;
      args.address.city ? this.location.city : null;
      args.address.country ? this.location.country : null;
      args.address.province ? this.location.province : null;

    }



  }

}

