import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MadeService } from '../services/made.service';
import { ModelService } from '../services/model.service';
import { WheelsService } from '../services/wheels.service';
import { CarTypeService } from '../services/car-type.service';

import { FeaturesSelectorComponent } from '../features-selector/features-selector.component';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  public carId;

  private madeList = [];

  private modelList = [];

  private wheelsList = [];

  private made;

  private model;

  private wheels;

  private carType;

  private carTypeList;

  private features = [];

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
    this._carTypeList.getCarTypeData().subscribe(data => {
      this.carTypeList = data;
      this.carType = this.carTypeList[0].name;
    });

    this.made = this.madeList[0].name;
    this.model = this.modelList[0].name;
    this.wheels = this.wheelsList[0].number;
  }

  saveToDB(){
    let vehicle = {
      "id": 6,
      "made": this.made,
      "model": this.model,
      "wheels": this.wheels,
      "carType": this.carType,
      "features": this.features
    }

    fetch('http://localhost:4000/vehicles/', {
       method: 'POST',
       body: JSON.stringify(vehicle),
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
       }).then(res => {
           setTimeout(_ => {
             alert("Created succeeded");
             this.router.navigate(['/']);
             return res;
           }, 1000);
       }).catch(err => err);
  }
}
