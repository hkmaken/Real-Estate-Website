import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

post = {
   tagline: 'Al Qamar Estate Agency',

   year: '2019',

   addr: 'Address',

   address: 'Street Number 1, Danewal Town Vihari, Vehari, Punjab.',

   num: '0334-7175308',

   mail: 'support@company.com',

   about: 'About the Company',

   intro: 'Al-Qamar Estate Agency was founded in 2006 and has since revolutionised the real estate industry by connecting buyers and sellers in a highly convenient way, making it a household name among most cities in Pakistan.'


  };

  constructor() { }

  ngOnInit() {
  }

}
