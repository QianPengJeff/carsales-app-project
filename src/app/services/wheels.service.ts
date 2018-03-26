import { Injectable } from '@angular/core';

@Injectable()
export class WheelsService {

  constructor() { }

  getWheelsData(){
    return [
       {
          "id":1,
          "number":4
       },
       {
          "id":2,
          "number":6
       }
    ];
  }
}
