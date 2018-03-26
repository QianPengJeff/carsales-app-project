import { Injectable } from '@angular/core';

@Injectable()
export class MadeService {

  constructor() { }

  getMadeData(){
    return [
        {
           "id":1,
           "name":"Audi"
        },
        {
           "id":2,
           "name":"BMW"
        },
        {
           "id":3,
           "name":"Ford"
        },
        {
           "id":4,
           "name":"Holden"
        },
        {
           "id":5,
           "name":"Hyundai"
        }
     ];
  }

}
