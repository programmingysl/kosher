export class Address {

  // region attributes

  streetNumber: number;
  apartment: string;
  streetName: string;
  city: string;
  province: string;
  country: string;

  // region attributes

 constructor(args?){

   if(args !== null){

     this.streetNumber  = args.streetNumber;
     this.apartment = args.apartment;
     this.streetName = args.streetName;
     this.city = args.city;
     this.country = args.country;
     this.province = args.province;

   }

 }




}
