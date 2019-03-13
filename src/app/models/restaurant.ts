
// imports
import { Address } from './Address';
import { Review } from './Review';

export class Restaurant {

  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address;

}
