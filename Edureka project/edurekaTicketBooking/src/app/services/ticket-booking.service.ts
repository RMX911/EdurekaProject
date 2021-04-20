import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketBookingService {
  // index:string = "";
  details: any = {};
  seatsBooked: any = [];
  constructor(private http: HttpClient) {}
  // search:boolean = false;
  getPlaces() {
    return this.http.get<any>('../../assets/destination.json');
  }

  getbusDetails() {
    return this.http.get<any>('../../assets/busdata.json');
  }

  storeBusDetails(index: number, busDetails: any) {
    sessionStorage.setItem(
      'clickData',
      JSON.stringify(busDetails[index as any])
    );
    // this.index = index as any;
  }

  getBusDetails(details: any) {
    details = JSON.parse(sessionStorage.getItem('clickData') || '{}');
    return details;
  }

  getSeatBookingDeatils(details: any) {
    details = JSON.parse(sessionStorage.getItem('bookingData') || '{}');
    return details;
  }

  sendData(details: any) {
    this.details = details;
  }

  getData() {
    return this.details;
  }

  seatBooking(seatNo: string) {
    if (this.seatsBooked.includes(seatNo)) {
      this.seatsBooked = this.seatsBooked.filter((e: string) => e !== seatNo);
    } else {
      this.seatsBooked.push(seatNo);
    }
    return this.seatsBooked;
  }
}
