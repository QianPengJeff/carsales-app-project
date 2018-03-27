import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MadeService } from '../services/made.service';
import { ModelService } from '../services/model.service';
import { WheelsService } from '../services/wheels.service';
import { CarTypeService } from '../services/car-type.service';

import { FeaturesSelectorComponent } from '../features-selector/features-selector.component';


@Component({
  selector: 'app-edit-vehicle-details',
  templateUrl: './edit-vehicle-details.component.html',
  styleUrls: ['./edit-vehicle-details.component.css']
})
export class EditVehicleDetailsComponent implements OnInit {

  public carId;

  public vehicle;

  private madeList = [];

  private modelList = [];

  private wheelsList = [];

  private made;

  private model;

  private wheels;

  private carType;

  private carTypeList;

  constructor(private route: ActivatedRoute,
              private _madeList: MadeService,
              private _modelList: ModelService,
              private _wheelsList: WheelsService,
              private _carTypeList: CarTypeService,
              private router: Router) {

  }

  ngOnInit() {
    this.madeList = this._madeList.getMadeData();
    this.modelList = this._modelList.getModelData();
    this.wheelsList = this._wheelsList.getWheelsData();
    this._carTypeList.getCarTypeData().subscribe(data => this.carTypeList = data);


    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carId = id;
    fetch('http://localhost:4000/vehicles/' + id)
      .then(response => response.json())
      .then(json => {
        setTimeout(_ => {
            this.vehicle = json;
            this.made = this.vehicle.made;
            this.model = this.vehicle.model;
            this.wheels = this.vehicle.wheels;
            this.carType = this.vehicle.carType;
            console.log(this.vehicle);
        }, 100);
      });
  }

  saveToDB(){
    this.vehicle.made = this.made;
    this.vehicle.model = this.model;
    this.vehicle.wheels = this.wheels;
    this.vehicle.carType = this.carType;
    //update the vehicle to database
    return fetch('http://localhost:4000/vehicles/' + this.carId, {
       method: 'PUT',
       mode: 'cors',
       body: JSON.stringify(this.vehicle),
       headers: {
           'Content-Type': 'application/json'
       }
       }).then(res => {
           setTimeout(_ => {
             alert("Update succeeded");
             this.router.navigate(['/']);
             return res;
           }, 1000);
       }).catch(err => err);
  }
  //cancel
  cancel(){
    this.router.navigate(['/']);
  }
}
