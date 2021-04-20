import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  storeUserDetails(userDetails: any) {
    sessionStorage.setItem('userData', JSON.stringify(userDetails));
  }

  getUserDetails(details: any) {
    details = JSON.parse(sessionStorage.getItem('userData') || '{}');
    return details;
  }
}
