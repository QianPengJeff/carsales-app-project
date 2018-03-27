import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesService {

  constructor() { }

  getFeaturesData(){
    return ["Airbags","Seatbelts","Bluetooth","Navigation","Aircon"];
  }
}
