import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

  constructor() { }

  getModelData() {
    return [
        {
           "id":1,
           "name":"A1"
        },
        {
           "id":2,
           "name":"A2"
        },
        {
           "id":3,
           "name":"A3"
        },
        {
           "id":4,
           "name":"A4"
        },
        {
           "id":5,
           "name":"A5"
        }
     ];
  }
}
