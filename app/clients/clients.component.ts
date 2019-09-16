import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

client = {
   tagline: 'TRUST',
   title: 'Team Members of Our Company',
   description: 'CEO and Founder Zafar Iqbal Maken has built Al-Qamar Estate from the ground up. “It’s the hard work, involvement, and dedication that has made Al-Qamar Estate what it is today, and guarantees the same kind of attention to detail in the future.',
   ceo: 'Zafar Iqbal Maken / CEO',
   name:'CEO',
   president: 'Qamar Iqbal / President',
   tl: 'Team Leader',
   adm: 'Administrator'
  };

  constructor() { }

  ngOnInit() {
  }

}
