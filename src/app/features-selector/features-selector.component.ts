import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features-selector',
  templateUrl: './features-selector.component.html',
  styleUrls: ['./features-selector.component.css']
})
export class FeaturesSelectorComponent implements OnInit {

  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

}
