import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesService {

  constructor() { }

  getFeaturesData(){
    return [
      {
         "id":1,
         "name":"Airbags"
      },
      {
         "id":2,
         "name":"Seatbelts"
      },
      {
         "id":3,
         "name":"Bluetooth"
      },
      {
         "id":4,
         "name":"Navigation"
      },
      {
         "id":5,
         "name":"Aircon"
      }
   ];
  }
}
