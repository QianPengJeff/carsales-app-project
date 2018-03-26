import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // data = [];

  constructor (){
    // fetch('http://localhost:4000/vehicles')
    //   .then(response => response.json())
    //   .then(json => {
    //
    //     setTimeout(_ => {
    //         this.data = json;
    //         console.log(this.data);
    //     }, 2000);
    //
    //   });

  }
}
