import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-features-selector',
  templateUrl: './features-selector.component.html',
  styleUrls: ['./features-selector.component.css']
})
export class FeaturesSelectorComponent implements OnInit {

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  private availableFeaturesList = [];

  private selectedFeaturesList = [];

  constructor(public _featuresList: FeaturesService) {

  }

  ngOnInit() {
    let tempList = this._featuresList.getFeaturesData();
    this.selectedFeaturesList = this.parentData.features;

    for(let i = 0; i < tempList.length; i++) {
      for (let j = 0; j < this.selectedFeaturesList.length; j++) {
        if (tempList[i].toString() == this.selectedFeaturesList[j].toString()) {
            tempList.splice(i,1);
        }
      }
    }
    this.availableFeaturesList = tempList;
  }

  toggleSelection(e,item){
    if (e.target.parentElement.id == "selectedList") {
      this.availableFeaturesList.push(item);
      this.selectedFeaturesList = this.selectedFeaturesList.filter(obj => obj !== item);
      this.childEvent.emit(this.selectedFeaturesList);
    }else {
      this.selectedFeaturesList.push(item);
      this.availableFeaturesList = this.availableFeaturesList.filter(obj => obj !== item);
      this.childEvent.emit(this.selectedFeaturesList);
    }
  }

}
