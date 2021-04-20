import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { TicketBookingService } from '../app/services/ticket-booking.service';
import { UserService } from '../app/services/user.service';

import { routing } from "./app.routing";

import { UserComponent } from './components/user/user.component';
import { HomepageComponent } from './components/user/homepage/homepage.component';
import { SearchDetailsComponent } from './components/user/search-details/search-details.component';
import { BusDetailsComponent } from './components/user/bus-details/bus-details.component';
import { PassengerDetailsComponent } from './components/user/passenger-details/passenger-details.component';
import { ReviewDetailsComponent } from './components/user/review-details/review-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    UserComponent,
    SearchDetailsComponent,
    BusDetailsComponent,
    PassengerDetailsComponent,
    ReviewDetailsComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule,routing],
  providers: [TicketBookingService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
