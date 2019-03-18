export class Review {

 // region attributes

author: number;
rating: number;
title: string;
body: string;
date: Date;

// region attributes

  constructor(args){

    //if(args !== null){

    this.author = args.author;
    this.rating = args.rating;
    this.title = args.title;
    this.body  = args.body;
    this.date  = args.date;

   // }



  }
}
