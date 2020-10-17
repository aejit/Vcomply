import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  title = 'Population (in millions)';
  type = 'ColumnChart';
  data = [
     ["2012", 900, 390,250],
     ["2013", 1000, 400,250],
     ["2014", 1170, 440,250],
     ["2015", 1250, 480,250],
     ["2016", 1530, 540,250]
  ];
  columnNames = ['Year', 'Asia', 'Europe', 'Africa'];
  options = {};
  width = 550;
  height = 400;

  ngOnInit() {
  }

  OnClick(){
    alert('you are already on home page');
  }

}
