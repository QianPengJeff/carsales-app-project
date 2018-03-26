import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeaturesSelectorComponent } from './features-selector/features-selector.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EditVehicleDetailsComponent } from './edit-vehicle-details/edit-vehicle-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

import { MadeService } from './services/made.service';
import { ModelService } from './services/model.service';
import { WheelsService } from './services/wheels.service';
import { CarTypeService } from './services/car-type.service';

const appRoutes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'add', component: AddVehicleComponent },
  { path: 'edit/:id', component: EditVehicleDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FeaturesSelectorComponent,
    VehicleListComponent,
    EditVehicleDetailsComponent,
    AddVehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [MadeService,ModelService,WheelsService,CarTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
