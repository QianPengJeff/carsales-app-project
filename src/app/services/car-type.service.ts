import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CarTypeService {

  public carTypeList;

  constructor(private http: Http) {

  }

  getCarTypeData(){
      return this.http.get(`http://localhost:4000/carType`)
      .map((res:Response) => res.json());
  }

}
