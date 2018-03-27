import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  public arrayLength:number;

    constructor(){
      this.arrayLength = 0;
    }

    setLength (data) {
      this.arrayLength = data;
    }
    getLength () {
      return this.arrayLength;
    }

}
