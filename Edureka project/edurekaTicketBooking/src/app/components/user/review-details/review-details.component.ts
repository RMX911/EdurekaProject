import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TicketBookingService } from '../../../services/ticket-booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  tripDetails: any = {};
  bookingDeatils: any = {};
  userDetails:any = {}; 
  ticketId = Math.floor(Math.random()*1000000000)
  date = sessionStorage.getItem('date')
  constructor(
    private _user: UserService,
    private router: Router,
    private _bookingDetails: TicketBookingService
  ) {}

  ngOnInit(): void {
    this.bookingDeatils = this._bookingDetails.getSeatBookingDeatils(
      this.bookingDeatils
    );
    this.tripDetails = this._bookingDetails.getBusDetails(this.tripDetails);
    this.userDetails = this._user.getUserDetails(this.userDetails);
  }

  ngOnDestroy(): void{
    sessionStorage.clear();
  }

}
