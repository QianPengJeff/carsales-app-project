import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  data = [];

  constructor (private router: Router, private _arrayLength :UtilityService){
    //get vehicle data from database
    fetch('http://localhost:4000/vehicles')
      .then(response => response.json())
      .then(json => {
        setTimeout(_ => {
            this.data = json;
            this._arrayLength.setLength(this.data.length);
        }, 1000);
      });

  }

  onClickMe(car){
    //redirect to edit page
    this.router.navigate(['edit',car.id]);
  }

  addNewCar(){
    //redirect to add new car page
    this.router.navigate(['add']);
  }

  ngOnInit() {
  }

}
