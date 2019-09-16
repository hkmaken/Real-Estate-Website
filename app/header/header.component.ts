import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

$(function() {
	  $('.slide').slide();
	});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'We have the most listings and constant updates. So you will never miss out.';
  head = 'Al Qamar Estate Agency';
  text = 'We will help you find a place you will love';

  ngOnInit() {

$(function() {
	  $('.slide').slide();
	});
$(function() {
	  $('.slide').slide({
	 
	    isAutoSlide: true,
	    isHoverStop: true,
	    isBlurStop: true,
	    isShowDots: true,
	    isShowArrow: true,
	    isHoverShowArrow: true,
	    isLoadAllImgs: false,
	    slideSpeed: 10000,
	    switchSpeed: 500,
	    dotsEvent: 'click',
	    dotsClass: 'dots', 
	    dotActiveClass: 'active',
	    arrowClass: 'arrow',
	    arrowLeftClass: 'arrow-left',
	    arrowRightClass: 'arrow-right'
	  });
	});

  }

}
