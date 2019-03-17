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

     args.streetNumber ? this.streetNumber : null;
     args.apartment ? this.apartment : null;
     args.streetName ? this.streetName : null;
     args.city ? this.city : null;
     args.country ? this.country : null;

   }

 }




}
