import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CarTypeService {

  public carTypeList;

  constructor(private http: Http) {
    // return fetch('http://localhost:4000/carType')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.carTypeList = json;
    //     setTimeout(_ => {
    //         this.carTypeList = json;
    //     }, 10);
    //   });
  }

  getCarTypeData(){
    // return fetch('http://localhost:4000/carType')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.carTypeList = json;
    //     setTimeout(_ => {
    //         this.carTypeList = json;
    //     }, 10);
    //   });
      return this.http.get(`http://localhost:4000/carType`)
      .map((res:Response) => res.json());
  }

}
