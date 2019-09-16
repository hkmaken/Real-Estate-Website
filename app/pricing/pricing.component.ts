import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

pricing = {
   tagline: '',
   title: 'We have the right package for you',
   plot1: '5 Marla',
   plot2: '10 Marla',
   plot3: '1 Kanal',
   plot4: '2 Kanal',
   plot5: '3 Kanal',
   house1: '5 Marla',
   house2: '10 Marla',
   house3: '1 Kanal',
   house4: '2 Kanal',
   house5: '3 Kanal',
   villa1: 'Luxury',
   villa2: 'Farm House',
   villa3: '10 Kanal',
   villa4: '20 Kanal',
   villa5: '50 Kanal',
   buy: 'BUY TODAY'
  };


  constructor() { }

  ngOnInit() {
  }

}
