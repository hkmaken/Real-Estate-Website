import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

content = {
   tagline: 'Contact Us',
      head: 'Phone',
      head1: 'Follow us',
      head2: 'Email',

   number: '0334-7175308',
   name: 'Zafar Iqbal Maken',
   number1: '03336606167',
   name1: 'Qamar Iqbal Maken',

   email: 'alqamarestates@gmail.com ',
   email1: 'qmaken59@gmail.com '
  };

  constructor() { }

  ngOnInit() {
  }

}
