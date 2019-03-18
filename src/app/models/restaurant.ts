
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


    if(args !== null) {


      this.name = args.name;
      this.website = args.website;
      this.phone = args.phone;
      this.rating = args.rating;
      this.avgMealPrice = args.avgMealPrice;

      // location= new Address(arguments?);
      // console.log(args.location.city);


      // I don't know why this works but it works !!!
      this.location = new Address({});
      this.location.streetNumber = args.location.streetNumber;
      this.location.streetName = args.location.streetName;
      this.location.apartment = args.location.apartment;
      this.location.city = args.location.city;
      this.location.province = args.location.province;
      this.location.country = args.location.country;
    }
  }
}
/*
  constructor(args?) {

    //if(args !== null){


      args.name ? this.name : null;
      args.website ? this.website : null;
      args.phone ? this.phone : null;
      args.rating ? this.rating : null;
      args.avgMealPrice ? this.avgMealPrice : null;



      args.location.streetNumber ? this.location.streetNumber : null;
      args.location.streetName ? this.location.streetName : null;
      args.location.apartment ? this.location.apartment : null;
      args.location.city ? this.location.city : null;
      args.location.country ? this.location.country : null;
      args.location.province ? this.location.province : null;

    //}



  }

}

*/

