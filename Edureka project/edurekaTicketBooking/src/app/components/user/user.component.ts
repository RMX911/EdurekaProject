import { Component, OnInit, OnChanges } from '@angular/core';
import { TicketBookingService } from '../../services/ticket-booking.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnChanges {
  isVisible: boolean = true;
  isVisibleResults: boolean = false;
  homePageFormData: any = {};
  constructor(private _ticket: TicketBookingService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  recieveFormData($event: Event) {
    this.homePageFormData = $event;
    this.isVisible = !this.isVisible;
  }
}
