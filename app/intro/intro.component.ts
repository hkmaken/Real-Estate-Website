import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  intro = {
   tagline: 'About Us',

   title: 'SUCCESS',

   description: 'We help you to sell your property',

   head: 'What is Al-Qamar Estate Agency?',

   head2: 'What do we do?',

   paragraph: 'Al-Qamar Estate Agency was founded in 2006 and has since revolutionised the real estate industry by connecting buyers and sellers in a highly convenient way, making it a household name among most cities in Pakistan.',

   paragraph2: 'Al-Qamar Estate Agency connects buyers with sellers and tenants with landlords for highly user-friendly real estate experience. The extensive listings and projects on offer provide something for everyone when it comes to property. '


  };

  constructor() { }

  ngOnInit() {
  }

}
