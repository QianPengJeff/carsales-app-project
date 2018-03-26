import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-vehicle-details',
  templateUrl: './edit-vehicle-details.component.html',
  styleUrls: ['./edit-vehicle-details.component.css']
})
export class EditVehicleDetailsComponent implements OnInit {

  public carId;

  private vehicle;

  private madeList =[
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

  private modelList = [
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

   private wheelsList =[
      {
         "id":1,
         "number":4
      },
      {
         "id":2,
         "number":6
      }
   ];

  private made,model,wheels,carType,carTypeList;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
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
      fetch('http://localhost:4000/carType')
        .then(response => response.json())
        .then(json => {
          setTimeout(_ => {
              this.carTypeList = json;
              console.log(this.carTypeList);
          }, 100);
        });
  }
}
