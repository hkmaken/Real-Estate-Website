import { Component, OnInit } from '@angular/core';

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
  
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


blog = {
   name: 'Before Selling House',
   title: 'Do not make these mistakes before selling your house',
   title2: 'DO YOU ACTUALLY NEED A REAL ESTATE AGENT',
   description: 'Published on, Apr 7, 2019',
   desc2: 'Published on, Aug 5, 2019',
   p1: 'If you are a first-time home seller, this guide is definitely worth reading in order to avoid committing any of these mistakes and to complete the transaction like a pro.',
   
   p11: 'When it comes to choosing or picking a real estate agent regarding sale, purchase or rent of a property, the first thing that comes into our mind is commission. Most of us want to skip hiring a real estate agent just to save the commission amount. Agents tend to take 1% commission on the total amount but they usually try to grab bigger chunk like 2% or 3% or sometimes, even more. ',
   hd3: 'Selling without an Agent',
   p12: 'Some text..',
   
   p2: 'There are a number of people who want to sell their home themselves and if you are one of them you will need to conduct a research on your own on recently sold properties in your area and properties that are currently on the market to determine currently selling price. Remember, agents commission have also been factored in most home prices so you can get better estimate at which price, you should sell your home.',
   
   h2: 'About Me',
   
   p3: 'Selling without an agent is challenging task. You may say that it is easier to put up property on online property portals and get leads. However, an agent is experienced enough to take care of your listing on multiple portals. This is the primary source for most real estate agents who are searching for properties on behalf of clients. Therefore, most of the agents show you properties that are listed on these property portals because they know that there will be another agent for them to negotiate with, rather than having to deal with an unknown or non-professional seller. If you are not willing to put your property on online portals, you do not need to because many homes are still sold through newspapers and classified ads.',

   p4: 'Some text about me in culpa qui officia deserunt mollit anim..',
   
   hd4: 'Selecting an agent',
   
   p13: 'All agents are not equal. When you consider selling your home, the first thing is to ask your friends and family members for referrals. Referrals from acquaintances and tend to carry a lot of weight and result in preferential treatment because a real estate agent will not want to lose a large source of referrals. Despite the drawbacks of having to rely on someone else for your property sale, a good agent is worth your money unless you have the education, time and energy to sell your own property. Finding a good agent may be difficult but if you pick through referrals and set your own terms, you would find that the commission you paid is the money well spent.',

   h3: 'Popular Posts',
   heading3: 'Follow Me',
   hd1: 'Minimizing the efforts',
   hd2: 'Not preparing for the sale',
   
   pp2: 'Sellers who do not de-clutter or stage their homes, do not seem serious about selling their homes. If you cannot afford hiring a professional, it does not mean that you cannot do anything on your own. Failing to do these things will not just reduce your sale price but may prevent you from selling it at all. For example, if have not corrected minor issues, a potential buyer may wonder whether the house has larger or costlier issues that need to be addressed later. ',
   
   post1: 'Renting Versus Buying - Advantages of Renting a Home',
   post2: 'Government Reinstate Ban on Non-Filers Purchase of Property',
   post3: 'Common Furniture Buying Mistakes You Must Avoid ',
   post4: 'How to Sell Your Property Successfully',
   post5: 'Pakistan realty sector - Where is it heading towards in 2019?',
   post: '-------------------------------------------------------',
   
  
  };


  constructor() {
  }

  ngOnInit() {

}}
