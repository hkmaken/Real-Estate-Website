import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

testimonial = {
   tagline: 'Our Services',

   p1: 'Buy property',
   p2: 'Sell your property',
   p3: 'Rent A House',

   project: 'Find your place with an immersive photo experiance and the most listings including things you will not find anywhere else',

   plot: 'Whether you sell with our new offers or take another approach, we will help you nevigate the path to a successful sale',

   rent: 'We are creating a seamless online experiance from shopping on the largest rental network to, to applying, to paying rent'


  };

  constructor() { }

  ngOnInit() {
  }

}
