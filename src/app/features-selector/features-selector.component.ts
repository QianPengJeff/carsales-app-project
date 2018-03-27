import { Component, OnInit, Input } from '@angular/core';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-features-selector',
  templateUrl: './features-selector.component.html',
  styleUrls: ['./features-selector.component.css']
})
export class FeaturesSelectorComponent implements OnInit {

  @Input() public parentData;



  private availableFeaturesList = [];

  private selectedFeaturesList = [];

  constructor(public _featuresList: FeaturesService) {

  }



  ngOnInit() {
    let tempList = this._featuresList.getFeaturesData();
    this.selectedFeaturesList = this.parentData.features;

    for(let i = 0; i < tempList.length; i++) {
      for (let j = 0; j < this.selectedFeaturesList.length; j++) {
        if (tempList[i].name == this.selectedFeaturesList[j]) {
            tempList.splice(i,1);
        }
      }
    }
    this.availableFeaturesList = tempList;
  }

}
