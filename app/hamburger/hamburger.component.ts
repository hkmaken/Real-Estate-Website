import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  title = 'Look jQuery Animation working in action!';

  ngOnInit() {

$('.menu-toggle').click(function() {
	 
	  $('ul').toggleClass('opening');
	  $(this).toggleClass('open');
	 
	})
  }

}
