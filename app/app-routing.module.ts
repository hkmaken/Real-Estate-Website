import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './post/post.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

const routes: Routes = [
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: 'Home', component: HeaderComponent },
{ path: 'About', component: IntroComponent },
{ path: 'Projects', component: GalleryComponent },
{ path: 'Services', component: TestimonialComponent },
{ path: 'Contact', component: ContentComponent },
{ path: 'Team', component: ClientsComponent },
{ path: 'Pricing', component: PricingComponent },
{ path: 'Blog', component: BlogComponent },
{ path: 'Blog', component: HamburgerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
