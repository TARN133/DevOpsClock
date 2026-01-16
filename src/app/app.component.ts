import { Component } from '@angular/core';
import { AnalogClock } from 'customizable-analog-clock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'web-design';
  ImagePath: string;
  ClockPath: string;

  constructor() {
    //image location
    this.ImagePath = '/assets/VectorPrime.jpg'
    this.ClockPath = '/assets/Autobots-Logo.png'
  }

  ngOnInit() {
  }
  
    clock = new AnalogClock({
    htmlElement : 'my-clock',
    showDate: true,
    showDigitalClock: true,
    showIndicators: true,
    clockIndicators : ['1', '2', '3' , '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    styleOptions : {
        fontSize: '35px',
        fontFamily: 'Roboto'
    }
});
  
}
