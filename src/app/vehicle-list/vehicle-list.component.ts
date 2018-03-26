import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  data = [];

  constructor (private router: Router){
    fetch('http://localhost:4000/vehicles')
      .then(response => response.json())
      .then(json => {

        setTimeout(_ => {
            this.data = json;
            console.log(this.data);
        }, 2000);

      });

  }

  onClickMe(car){
    console.log(car);
    this.router.navigate(['edit',car.id]);
  }

  ngOnInit() {
  }

}
