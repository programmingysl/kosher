export class Review {

 // region attributes

author: number;
rating: number;
title: string;
body: string;
date: Date;

// region attributes

  constructor(args){

    if(args !== null){

      args.author ? this.author : null;
      args.rating ? this.rating : null;
      args.title ? this.title : null;
      args.body ? this.body : null;
      args.date ? this.date : null;

    }



  }
}
