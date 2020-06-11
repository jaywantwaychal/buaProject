import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PremiumCarouselComponent } from './premium-carousel/premium-carousel.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    SearchbarComponent,
    HomepageComponent,
    PremiumCarouselComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
