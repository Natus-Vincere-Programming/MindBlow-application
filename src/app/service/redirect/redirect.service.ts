import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor() { }

  redirectSuccessLogin() {
    // redirect to dashboard
    localStorage.getItem('access_token')
  }
}
