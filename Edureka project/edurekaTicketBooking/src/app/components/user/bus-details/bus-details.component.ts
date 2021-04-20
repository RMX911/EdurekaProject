import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import {Router} from '@angular/router';
import { TicketBookingService } from '../../../services/ticket-booking.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit, DoCheck {
  busDetails:any = {};
  isChecked:any =  []
  seatPrice = 0;
  selectSeat:boolean = false;
  seatClass:string =''
  total:number = 0
  constructor(private _travelDetails:TicketBookingService,  private router:Router) {}
  
  ngOnInit(): void {
    this.busDetails = this._travelDetails.getBusDetails(this.busDetails);
    console.log(this.busDetails)
  }
  
  ngDoCheck(): void {
    this.busDetails = this._travelDetails.getBusDetails(this.busDetails);
    this.seatPrice = this.busDetails.fare;
    this.seatClass = this.busDetails.coachType;
    this.isChecked = this._travelDetails.seatsBooked;
  }

  calculatePrice(seatNo:string){
    this.isChecked = this._travelDetails.seatBooking(seatNo)
  }
  
  onSubmit(){
    sessionStorage.setItem('bookingData', JSON.stringify({
      "seatsBooked":this.isChecked,
      "totalFare": this.isChecked.length * this.seatPrice
  }));
    this.router.navigate(['/passengerDetails'])
  }

}
