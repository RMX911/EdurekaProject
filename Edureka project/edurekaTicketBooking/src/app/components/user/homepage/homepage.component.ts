import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketBookingService } from '../../../services/ticket-booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  startForm: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;
  places: any = [];

  // @Output() homePageFormEvent = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private _destination: TicketBookingService,
    private router: Router
  ) {}

  ngOnInit() {
    this._destination.getPlaces().subscribe((data) => {
      this.places = data.places;
      console.log(this.places);
    });

    this.startForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
    },
    {
      validator: this.mustNotMatch('password', 'confirmPassword')
    });

  }

  get f() {
    return this.startForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.startForm.invalid) {
      return;
    } else {
      this._destination.sendData(this.startForm.value);
      sessionStorage.setItem('date',this.startForm.value.date)
      this.router.navigate(['/searchDetails']);
      // this.homePageFormEvent.emit(this.startForm.value);
    }
  }

  mustNotMatch(source: string, destination: string) {
    return (formGroup: FormGroup) => {
      const src = formGroup.controls['source'];
      const dest = formGroup.controls['destination'];

      if (this.startForm.value.source === this.startForm.value.destination && this.startForm.value.destination!='') {
        dest.setErrors({
          mustNotMatch: true,
        });
      } 
    };
  }
}
