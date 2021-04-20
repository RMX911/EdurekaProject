import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { TicketBookingService } from '../../../services/ticket-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css'],
})
export class PassengerDetailsComponent implements OnInit {
  startForm: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;

  tripDetails: any = {};
  bookingDeatils: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private _user: UserService,
    private router: Router,
    private _bookingDetails: TicketBookingService
  ) {}

  ngOnInit() {
    this.startForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.bookingDeatils = this._bookingDetails.getSeatBookingDeatils(
      this.bookingDeatils
    );
    this.tripDetails = this._bookingDetails.getBusDetails(this.tripDetails);
  }

  get f() {
    return this.startForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.startForm.invalid) {
      return;
    } else {
      this._user.storeUserDetails(this.startForm.value);
      this.router.navigate(['/viewBusTicket']);
    }
  }
}
